const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(request,response) => {
    return response.json({mensagem:'Projeto Lambe'});
});

app.listen(8080, () => {
    console.log(`Projeto lambe-api`);
    console.log(`API rodando na porta http://localhost:8080/`);
    console.log('Pressione Ctrl+C para sair.');
});