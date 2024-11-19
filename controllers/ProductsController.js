const {Produtos} = require('../models')


const getAllProduct = async (_req, res) => {
    try{
        const products = await Produtos.findAll();
        res.json(products);
        
    } catch(error) {
        console.log(error);
        res.status(500).json({error: "erro no sistema"})
    }
}

const createProducts = async (req, res) => {
    const {nome, categoria, precoAntigo, precoNovo, desconto, imagem  } = req.body

    if (!nome || !categoria || !precoAntigo || !precoNovo || !imagem) {
        return res.status(400).json({ error: "Campos obrigatórios" });
    }

     try {
        const newProduct = await Produtos.create({ nome, categoria, precoAntigo, precoNovo, desconto, imagem });
        res.status(201).json(newProduct);
     } catch (error) {
        console.log(error);
        
        res.status(500).json({error: 'erro no servidor'})
     }
}

module.exports ={
    getAllProduct,
    createProducts
}