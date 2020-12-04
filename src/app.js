const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/',require('./routes/create'));
app.use('/',require('./routes/read'));
app.use('/',require('./routes/update'));
app.use('/',require('./routes/delete'));

app.listen(8080, () => {
    console.log(`Projeto lambe-api`);
    console.log(`API rodando na porta http://localhost:8080/`);
    console.log('Pressione Ctrl+C para sair.');
});