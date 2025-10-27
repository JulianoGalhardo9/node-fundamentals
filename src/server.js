import http from 'node:http';

// GET -> Buscar uma informação
// POST -> Criar uma informação
// PUT -> Atualizar uma informação
// DELETE -> Deletar uma informação
// PATCH -> Atualizar uma informação específica

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {

        return res.end('Listagem de usuários');
    }

    if (method === 'POST' && url === '/users') {
        return res.end('Criação de um usuário');
    }

    return res.end('Rota de escape');

});

server.listen(3333)