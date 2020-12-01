// Imports no Express e Instanciação do App
const express= require('express')
const app = express()

// Rotas
const pokedex = require('./routes/pokedex');
const regions = require('./routes/regions');


// Compatibilidade JSON e uso das rotas
app.use(express.json())
app.use('/pokedex', pokedex);
app.use('/regions', regions);


// Porta 3000
app.listen(3000)