const express = require('express');
const create = express.Router();
const {db_create,db} = require('../db/connetion');

const setProp = (obj) =>{
    return `{${Object.keys(obj).map(key => `${key}:$${key}`).toString()}}`
}
const setArrayProp = (obj) =>{
    return Object.keys(obj).map(key => [key,obj[key]])
}

create.post('/relationship',(req,res)=>{
    var data = req.body;
    var temp =setArrayProp(data);
    var query = `
    match(x:${data.entity_1.type}) where x.${data.entity_1.name}="${data.entity_1.value}" 
    match(y:${data.entity_2.type}) where y.${data.entity_2.name}="${data.entity_2.value}" 
    create (x)<-[:${data.relationship}]-(y)`;
    console.log(query)
    db(query,req,res)
});

create.post('/:entity',(req,res)=>{
    var query = `create(  :${req.params.entity} ${setProp(req.body)})`;
    console.log(query)
    db_create(query,req,res)
});


module.exports = create;