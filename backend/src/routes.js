const express = require('express');
const createCandidate = require('./createCandidate');
const routes = new express.Router();

routes.post('/register', createCandidate.register);

module.exports = routes;