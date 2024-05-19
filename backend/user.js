import { database } from "./database.js";

export const addUserBalance = (userId, amount) =>
  database
    .run(`UPDATE users SET balance = balance + ? WHERE id = ?`, amount, userId)
    .then(() => database.get(`SELECT balance FROM users WHERE id = ?`, userId))
    .then((row) => row.balance);
