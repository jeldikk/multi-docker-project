const express = require('express');
const valuesController = require("../controllers/values.controller");

const valuesRouter = express.Router();

valuesRouter.get('/all', valuesController.getAllValues);
valuesRouter.get('/current', valuesController.getCurrentValue);
valuesRouter.post('/', valuesController.insertNewvalue);

module.exports = valuesRouter;