const Allerros = require("../error/allError.js")

const error = (err,request,response,next) => {
    console.log("caiu aqui")
    if(err instanceof Allerros){
        response.json(err.message).status(err.status)
    }
    response.json("erro interno do servidor").status(500)
}
module.exports = error