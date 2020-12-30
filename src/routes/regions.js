// Import no Express e no Router para módulos de rotas
import express from "express";
var router = express.Router();

const data = require('../database/pokedex.json')


// Listar a Pokedex de uma Região específica
router.get('/kanto', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id <= 151)
    
    let filtradosInfo = []
    
    for (let i = 0; i < filtrados.length; i++){

        var pokeInfo = {
            name: filtrados[i].name.english,
            id: filtrados[i].id
        }

        filtradosInfo[i] = pokeInfo
    }

    res.json(filtradosInfo)
})

// Listar a Pokedex de uma Região específica
router.get('/johto', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id > 151 && pokemon.id <= 251 )

    let filtradosInfo = []
    
    for (let i = 0; i < filtrados.length; i++){

        var pokeInfo = {
            name: filtrados[i].name.english,
            id: filtrados[i].id
        }

        filtradosInfo[i] = pokeInfo
    }

    res.json(filtradosInfo)
})

// Listar a Pokedex de uma Região específica
router.get('/hoenn', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id > 251 && pokemon.id <= 386 )

    let filtradosInfo = []
    
    for (let i = 0; i < filtrados.length; i++){

        var pokeInfo = {
            name: filtrados[i].name.english,
            id: filtrados[i].id
        }

        filtradosInfo[i] = pokeInfo
    }

    res.json(filtradosInfo)
})

// Listar a Pokedex de uma Região específica
router.get('/sinnoh', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id > 386 && pokemon.id <= 493 )
    
    let filtradosInfo = []
    
    for (let i = 0; i < filtrados.length; i++){

        var pokeInfo = {
            name: filtrados[i].name.english,
            id: filtrados[i].id
        }

        filtradosInfo[i] = pokeInfo
    }

    res.json(filtradosInfo)
})

// Listar a Pokedex de uma Região específica
router.get('/unova', function (req, res) {

    const filtrados = data.filter(pokemon => pokemon.id > 493 && pokemon.id <= 649 )
    
    let filtradosInfo = []
    
    for (let i = 0; i < filtrados.length; i++){

        var pokeInfo = {
            name: filtrados[i].name.english,
            id: filtrados[i].id
        }

        filtradosInfo[i] = pokeInfo
    }

    res.json(filtradosInfo)
})

// Export no módulo com a rota principal e suas secundárias
module.exports = router;



