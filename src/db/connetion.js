const { query } = require('express');
const neo4j = require('neo4j-driver');
require('dotenv/config');


const URI = process.env.URI2;
const USER = process.env.DBUSER;
const PASS = process.env.PASS2;

console.log({
    uri:URI,
    user:USER,
    password:PASS
})

const driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASS));
const db = driver.session();



module.exports = db;