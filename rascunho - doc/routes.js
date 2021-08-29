const express = require('express');
const routes = new express.Router();

routes.get('/', (_, res) => {
    res.send('get home ok');
});

routes.get('/register', (_, res) => {
    res.send('get register ok');
});

routes.post('/register', async (_, res) => {
    const nome = req.body.nome;
    const cep = parseInt(req.body.idade);

    try {
        const result = await register({ nome, cep });
        console.log(result);
        res.send('post ok');
    } catch (err) {
        console.log(err.stack);
    }
});

module.exports = routes;