import http from "node:http";
import { randomUUID } from 'node:crypto'
import { Database } from "./database.js";
import { json } from "../src/middlewares/json.js";

// UUID => Universally Unique Identifier

// GET -> Buscar uma informação
// POST -> Criar uma informação
// PUT -> Atualizar uma informação
// DELETE -> Deletar uma informação
// PATCH -> Atualizar uma informação específica

const dataBase = new Database()

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === "GET" && url === "/users") {
    const users = dataBase.select("users");

    return res.end(JSON.stringify(users));

  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    const user = {
      id: randomUUID(),
      name,
      email,
    };

    dataBase.insert("users", user)

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
