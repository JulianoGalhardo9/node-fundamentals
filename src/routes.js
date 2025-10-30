import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import path from "node:path";
import { buildRoutePath } from "./utils/build-route-path.js";

const dataBase = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handle: (req, res) => {
      const users = dataBase.select("users");

      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handle: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: randomUUID(),
        name,
        email,
      };

      dataBase.insert("users", user);

      return res.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handle: (req, res) => {
      return res.end();
    },
  }
];
