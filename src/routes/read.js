const express = require('express');
const read = express.Router();
const db = require('../db/connetion');

read.get('/',(req,res) => {
    db(`match(n) return n`,req,res)
});

read.get('/:entity',(req,res) => {
    db(`match(n:${req.params.entity}) return n`,req,res)
    });

module.exports = read;