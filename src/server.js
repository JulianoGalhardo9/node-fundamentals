import http from "node:http";
import { json } from "../src/middlewares/json.js";

// GET -> Buscar uma informação
// POST -> Criar uma informação
// PUT -> Atualizar uma informação
// DELETE -> Deletar uma informação
// PATCH -> Atualizar uma informação específica

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === "GET" && url === "/users") {
    return res
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;

    users.push({
      id: 1,
      name,
      email,
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
