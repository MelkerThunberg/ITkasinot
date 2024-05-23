import express from "express";
import cors from "cors";
import pkg from "body-parser";
import crypto from "crypto";

import cookieParser from "cookie-parser";
import { database } from "./database.js";
import { authMiddleware } from "./middleware.js";
import { addUserBalance } from "./user.js";

const { json, urlencoded } = pkg;

const app = express();

app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(authMiddleware);

app.post("/game/blackjack", async (req, res) => {
  const user = req.user;

  const body = req.body;
  const betAmount = body.betAmount;
  const result = body.winingState;

  console.log(result);
  
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  if (betAmount > user.balance) {
    return res.status(400).json({ message: "Inte tillräckligt med saldo", success: false });
  }

  if (result === "win") {
    const winnings = betAmount * 2;
    await addUserBalance(user.id, winnings);
    res.json({
      success: true,
      result,
      winnings,
    });
  }
  if (result === "lose") {
    const winnings = -betAmount;
    await addUserBalance(user.id, winnings);
    res.json({
      success: true,
      result,
      winnings,
    });
  }

  if (result === "push") {
    const winnings = 0;
    await addUserBalance(user.id, winnings);
    res.json({
      success: true,
      result,
      winnings,
    });
  }
});

app.post("/game/coinflip", async (req, res) => {
  const user = req.user;
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  const body = req.body;
  const betAmount = body.betAmount;
  const guess = body.guess; // heads or tails

  console.log(
    `Bet amount: ${betAmount} Guess: ${guess} Balance: ${user.balance}`
  );

  if (betAmount > user.balance)
    return res
      .status(400)
      .json({ message: "Inte tillräckligt med saldo", success: false });

  const result = Math.random() > 0.5 ? "heads" : "tails";
  const win = guess === result;
  const winnings = win ? betAmount : -betAmount;

  await addUserBalance(user.id, winnings);

  res.json({
    success: true,
    result,
    winnings,
  });
});

const SPIN_COST = 100;
app.post("/game/caseunbox", async (req, res) => {
  const user = req.user;
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  if (user.balance < SPIN_COST)
    return res
      .status(400)
      .json({ message: "Inte tillräckligt med saldo", success: false });

  const rewards = [10, 20, 30, 50, 100, 1000];

  const reward = rewards[Math.floor(Math.random() * rewards.length)];
  await addUserBalance(user.id, reward - SPIN_COST);

  res.json({ success: true, reward });
});

app.post("/auth/register", async (req, res) => {
  const body = req.body;
  const username = body.username;
  const password = body.password;
  const encryptedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const balance = 1000;

  const user = await database.get(`SELECT * FROM users WHERE username = ?`, [
    username,
  ]);

  if (user) {
    return res
      .status(400)
      .json({ message: "User already exists", success: false });
  }

  database.run(
    `INSERT INTO users (username, password, balance) VALUES (?, ?, ?)`,
    [username, encryptedPassword, balance]
  );

  res.json({ message: "Success", success: true });
});

const createAuthToken = () => {
  return Math.random().toString(36).substring(2, 15);
};

app.post("/auth/login", async (req, res) => {
  const body = req.body;
  const username = body.username;
  const password = body.password;
  const encryptedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const match = await database.get(
    `SELECT * FROM users WHERE username = ? AND password = ?`,
    [username, encryptedPassword]
  );

  if (!match)
    return res
      .status(401)
      .json({ message: "Ingen match kunde hittas", success: false });

  const authToken = createAuthToken();
  await database.run(`UPDATE users SET token = ? WHERE username = ?`, [
    authToken,
    username,
  ]);

  res.cookie("authToken", authToken, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  res.json({ message: "Success", success: true, authToken });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/auth/me", async (req, res) => {
  const authToken = req.cookies?.authToken;

  console.log(`Auth token: ${authToken}`);
  if (!authToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const user = await database.get(`SELECT * FROM users WHERE token = ?`, [
    authToken,
  ]);
  if (user) {
    return res.json({
      id: user.id,
      username: user.username,
      balance: user.balance,
    });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
});


app.post('/game/dailybonus', (req, res) => {

  // Find the user by userId
  const user = req.user;

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const claimCooldown = 10 * 60 * 1000; // 10 minutes in milliseconds
  const lastClaimTimestamp = user.lastClaimTimestamp || 0;

  // Check if enough time has passed since the last claim
  if (Date.now() - lastClaimTimestamp < claimCooldown) {
    return res.status(400).json({ error: 'You can claim only once every 10 minutes.' });
  }

  // Update the user's balance with $10
  user.balance += 100;
  user.lastClaimTimestamp = Date.now();


  addUserBalance(user.id, winnings);

  res.json({
    success: true,
  });

});

const port = 4000;
app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});