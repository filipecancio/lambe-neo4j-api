const express = require('express');
const cors = require('cors');
const db = require('./db/connetion');


const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(request,response) => {
    db.run(`match(n) return n`)
        .then((result)=>{
            const value = result.records.map((record)=>{
                return record._fields[0].properties;
            })
            return response.json(value);
        })
        .catch((err)=>{
            console.log(err)
        })
    
});

app.get('/:entity',(request,response) => {
    db.run(`match(n:${request.params.entity}) return n`)
        .then((result)=>{
            const value = result.records.map((record)=>{
                return record._fields[0].properties;
            })
            return response.json(value);
        })
        .catch((err)=>{
            console.log(err)
        })
    
});

app.listen(8080, () => {
    console.log(`Projeto lambe-api`);
    console.log(`API rodando na porta http://localhost:8080/`);
    console.log('Pressione Ctrl+C para sair.');
});