
const bycript = require('bcrypt')
const jwt = require('jsonwebtoken')
const {endereco,cliente} = require('../models')
const { where } = require('sequelize')

module.exports = function Cliente()  {
    
 return{ criarCliente: async (request,response,next) => {
 try{
   
  const{clientes,enderecos} = request.body

  const existClient = await cliente.findOne({where:{email:clientes.email}})
  
    

if(!existClient){
const camadaSegurança = 10
// const senhaCriptografada = bycript.hashSync(clientes.password,camadaSegurança)

const clienteCreate = await cliente.create({...clientes})
const {id} = clienteCreate
const CreateAddress = await endereco.create({...enderecos, ClienteIdd:id})
response.json("cliente cadastrado com sucesso "+ clienteCreate.nome)
}

response.json("bem vindo a rota")

 }catch(error)
 {
    next(error)
 }
 },
deletarCliente:async (request,response,next) =>{},
autenticarCliente:async (request,response,next) =>{}
}
}