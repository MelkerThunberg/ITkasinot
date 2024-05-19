import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const database = await open({
  filename: "main.db",
  driver: sqlite3.Database,
});

database.exec(`
          CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY,
              username TEXT,
              password TEXT,
              token TEXT,
              balance INTEGER
          )
      `);
