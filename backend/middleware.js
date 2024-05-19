import { database } from "./database.js";

export const authMiddleware = async (req, res, next) => {
  const authToken = req.cookies?.authToken;

  const user = await database.get(`SELECT * FROM users WHERE token = ?`, [
    authToken,
  ]);
  if (user) {
    req.user = user;
  }

  console.log(`Request: ${req.method} ${req.url}`);
  next();
};
