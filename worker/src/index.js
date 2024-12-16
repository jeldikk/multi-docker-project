const path = require('path')
const dotenv = require('dotenv');

dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

const {client, subscriber} = require("./redis");

async function connectRedis(){
    try{
        await client.connect();
        await subscriber.connect();

        console.log("connected to redis")
    }
    catch(err){
        console.error("Errored while connecting to redis ", err)
    }
}

connectRedis();