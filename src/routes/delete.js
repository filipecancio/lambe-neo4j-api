const express = require('express');
const del = express.Router();
const db = require('../db/connetion');

del.delete('/:entity/:id',()=>{});

module.exports = del;