const { query } = require('express');
const neo4j = require('neo4j-driver');
require('dotenv/config');


const URI = process.env.URI2;
const USER = process.env.DBUSER;
const PASS = process.env.PASS2;

const driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASS));
const aa = driver.session();

const db = (query,request,response)=>{
    aa.run(query)
        .then((result)=>{
        const value = result.records.map((record)=>{
            return record._fields[0].properties;
        })
        return response.json(value);
    })
        .catch((err)=>{
            console.log(err)
        })
}



module.exports = db;