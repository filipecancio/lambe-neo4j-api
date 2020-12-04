const express = require('express');
const update = express.Router();
const db = require('../db/connetion');

update.put('/:entity/:id',(req,res)=>{
    db(`match(n:${req.params.entity}) return n`,req,res)
});

module.exports = update;