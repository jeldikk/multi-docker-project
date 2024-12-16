const {client, publisher} = require("../redis");
const Values = require("../models/values.models");
const { StatusCodes } = require("http-status-codes");

async function getAllValues(req, res){
    const allValues = await Values.findAll();
    res.send(allValues.map((value) => value.dataValues));
}

async function getCurrentValue(req, res){
    try{
        const redisValues = await client.hGetAll('values');
        res.send(redisValues)
    }
    catch(err){
        res.status(StatusCodes.SERVICE_UNAVAILABLE).send(err.message)
    }
}

async function insertNewvalue(req, res){
    const {index} = req.body;
    console.log({index})
    try{
        if(index > 40){
            res.status(StatusCodes.NOT_IMPLEMENTED).send("Index too high");
            return;
        }

        await client.hSet('values', index, 'Nothing yet!');
        await client.set('name', 'kamal')
        await client.publish('insert', index);
        const values = await Values.create({number: index});
        console.log({values})
        res.status(StatusCodes.ACCEPTED).json({working: true})
    }
    catch(err){
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Error occured while inserting a new value", err: err.message})
    }
}

module.exports = {
    getAllValues, 
    getCurrentValue,
    insertNewvalue
}