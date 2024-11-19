const express = require('express')
const rotaUser = express.Router()
const Cliente = require("../controllers/ClientController")
const {criarCliente,autenticarCliente,deletarCliente} = Cliente()
rotaUser.post('/criar',criarCliente)

module.exports = rotaUser