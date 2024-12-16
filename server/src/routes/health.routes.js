const express = require('express');
const { StatusCodes } = require('http-status-codes');

const healthRouter = express.Router();

healthRouter.get('/', (req, res) => {
    res.sendStatus(StatusCodes.OK)
})

module.exports = healthRouter;