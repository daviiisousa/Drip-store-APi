const express = require('express')
const rotaUser = express.Router()
const Cliente = require("../controllers/ClientController.js")
const {criarCliente,autenticarCliente,deletarCliente,getAll,login} = Cliente()
const $functionError = require('../middleware/error.js')

rotaUser.post('/criar',criarCliente)
rotaUser.get('/buscarTodos',getAll)
rotaUser.post('/login',login)
rotaUser.use($functionError)
module.exports = rotaUser