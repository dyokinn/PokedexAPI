// Imports no Express e Instanciação do App
import express from "express";
import cors from "cors";
const app = express()

// Imports nas Rotas
const search = require('./routes/search');
const regions = require('./routes/regions');
const types = require('./routes/types');


// Compatibilidade JSON e uso das rotas
app.use(express.json())
app.use(cors())
app.use('/search', search);
app.use('/regions', regions);
app.use('/types', types);
app.get('/teste', function(req, res) {
    res.status(200).json({
        message: "de dentro de um container atualizado"
    })
  });


// Atribuição da porta 5000
app.listen(5000, ()=>{
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n +++ Server Online +++ \n\n\n')
})
