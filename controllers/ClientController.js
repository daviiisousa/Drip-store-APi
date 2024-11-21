
const bycript = require('bcrypt')
const jwt = require('jsonwebtoken')
const {cliente,endereco} = require('../models')
const { where, ConnectionRefusedError } = require('sequelize')
const { createProducts } = require('./ProductsController')


const tokenJwt = require('jsonwebtoken')
const Allerros = require('../error/allError.js')



module.exports = function Cliente()  {
    
 return{ criarCliente: async (request,response,next) => {
 try{
   
   
  const{clientes,enderecos} = request.body

 

const existClient = await cliente.findOne({where:{email:clientes.email}})
console.log(existClient)


 
    

if(!existClient){
const camadaSegurança = 10

const senhaCriptografada = bycript.hashSync(clientes.senha,camadaSegurança)


const {dataValues} = await cliente.create({...clientes,senha:senhaCriptografada})

const {id} = dataValues
console.log(id)
const createAdress = await endereco.create({...enderecos, ClienteIdd:id})
console.log(createAdress)
const values = createAdress.dataValues
console.log(values)
response.json("cliente cadastrado com sucesso "+dataValues.nome + " que reside no bairro " + values.bairro)
return;
}

throw new Error("cliente ja existe no sistema")



 }catch(error){
  console.log(error)
  response.json(error.message).status(500)
 }
 },
deletarCliente:async (request,response,next) =>{},
autenticarCliente:async (request,response,next) =>{},
getAll: async (request,response,next) => {
  try{
    const AllClient = await cliente.findAll()
    if(AllClient instanceof Array){
      console.log(AllClient)
      AllClient ? response.json([AllClient]).status(200) : response.json("não existe nenhum registro no banco de dados")
    }
    
  }catch(error){
next(error)
  }
},
login: async (request,response,next) => {
  try{
    const {email,senha} = request.body
    const {dataValues} = await cliente.findOne({where:{email}})
   
    if(dataValues){
        console.log(dataValues.senha)
      const hashSenha = await bycript.compare(senha,dataValues.senha)
      console.log(hashSenha)
      if(hashSenha){
        const token = tokenJwt.sign(dataValues,process.env.SECRET_KEY,{
          expiresIn:"1h",
         
        })
        console.log("seu token gerado é " + token)
        response.json({token})
        return;
  
      }else{
        throw new Allerros("as senhas não se coincidem",400)
      }
     
    }
   throw new Allerros("usuário não registrado no sistema",400)


  }catch(error){
   
    next(error)
  }
},
profile: async (request,response,next) => {
  try{
    const user = request.user
    response.json({name:user.name})
  }catch(error){
    next(error)

  }
  const user = request.user
}
}
}