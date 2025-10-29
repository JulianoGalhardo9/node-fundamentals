import http from "node:http";
import { json } from "../src/middlewares/json.js";
import { routes } from "./routes.js";

// UUID => Universally Unique Identifier

// GET -> Buscar uma informação
// POST -> Criar uma informação
// PUT -> Atualizar uma informação
// DELETE -> Deletar uma informação
// PATCH -> Atualizar uma informação específica

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find(route => {
    return route.method === method && route.path === url
});

if (route) {
    return route.handle(req, res);
}

  return res.writeHead(404).end();
});

server.listen(3333);
