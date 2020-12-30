// Import no Express e no Router para módulos de rotas
import express from "express";
var router = express.Router();

const data = require('../database/pokedex.json')

// Listar a Pokedex de Pokémons que possuem um tipo específico
router.get('/:type', function (req, res) {

    const {type} = req.params
    const filtrados = data.filter(pokemon => pokemon.type.includes(type))
    res.json(filtrados)
})

// Export no módulo com a rota principal e suas secundárias
module.exports = router;