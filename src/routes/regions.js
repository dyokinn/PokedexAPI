// Import no Express e no Router para módulos de rotas
var express = require('express');
var router = express.Router();

const data = require('../database/pokedex.json')


// Listar a Pokedex de uma Região específica
router.get('/kanto', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id <= 151)
    res.json(filtrados)
})

// Listar a Pokedex de uma Região específica
router.get('/johto', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id > 151 && pokemon.id <= 251 )
    res.json(filtrados)
})

// Listar a Pokedex de uma Região específica
router.get('/hoenn', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id > 251 && pokemon.id <= 386 )
    res.json(filtrados)
})

// Listar a Pokedex de uma Região específica
router.get('/sinnoh', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id > 386 && pokemon.id <= 493 )
    res.json(filtrados)
})

// Listar a Pokedex de uma Região específica
router.get('/unova', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id > 493 && pokemon.id <= 649 )
    res.json(filtrados)
})

// Export no módulo com a rota principal e suas secundárias
module.exports = router;



