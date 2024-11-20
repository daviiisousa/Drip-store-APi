require('dotenv').config()

module.exports = {
   
    development:{
        username: process.env.DB_USER,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        password: process.env.DB_PASS,
        dialect: process.env.DB_DIALECT,
        database: process.env.DB_NAME
    }
    // development:{
    //     username:"root",
    //     host:"localhost",
    //     port:" 3306",
    //     password:"2710",
    //     dialect: "mariadb",
    //     database: "dripapi"
    // }

}