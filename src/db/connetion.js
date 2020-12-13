const { query } = require('express');
const neo4j = require('neo4j-driver');
require('dotenv/config');


const URI = process.env.URI2;
const USER = process.env.DBUSER;
const PASS = process.env.PASS2;

const convertDate = (obj)=>{
    return `${obj.year.low}-${obj.month.low}-${obj.day.low}`;
}

const driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASS));
const session = driver.session();

module.exports = {
    db(query,request,response){
        session.run(query)
            .then((result)=>{
            const value = result.records.map((record)=>{
                var entity = record._fields[0].properties
                if(entity.birthday){entity.birthday = new Date(convertDate(entity.birthday))}
                return entity;
            })
            return response.json(value);
        })
            .catch((err)=>{
                console.log(err)
            })
    },
    
    db_create(query,request,response){
        session.run(query,request.body)
        .then((result) =>{
            return result;
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    /*
    match(x:User) where x.cpf="046.498.595-14" 
match(y:Contact)where y.instagram = "@pedruxo_fah" 
create (x)<-[:found]-(y)
    */
};