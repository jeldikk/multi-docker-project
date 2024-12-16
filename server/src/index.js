const path = require('path')
const dotenv = require('dotenv');

dotenv.config({
    path: path.resolve(__dirname, "../.env")
});
const app = require("./app");
const { sequelize } = require('./database');
const { client } = require("./redis");
const keys = require("./keys");
const Values = require("./models/values.models");

async function connectRedis(){
    try{
        await client.connect();
        console.log("Connected to Redis")
    }
    catch(err){
        throw err;
    }
}

async function connectPostgres(){
    try{
        await sequelize.authenticate();
        await Values.sync({})
        console.log('Connected to database')
    }
    catch(err){
        throw err;
    } 
}

async function prepareServers(){
    try{
        await connectRedis();
        await connectPostgres();
        app.listen(keys.serverPort, () => {
            console.log("Listening Server on port ", keys.serverPort)
        })
    }
    catch(err){
        console.error("Error occurred ", err)
    }
};

prepareServers();