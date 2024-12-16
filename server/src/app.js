require('express-async-errors');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { StatusCodes } = require('http-status-codes')
const valuesRouter = require('./routes/values.routes');
const healthRouter = require("./routes/health.routes");

const app = express();

app.use(cors());
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({extended: true, limit: '5mb'}));

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('Hi')
})

app.use("/health", healthRouter);
 
// the below part is handled by nginx routing
// app.get('/api/values', valuesRouter);
app.use('/values', valuesRouter);

// app.get('/health', (req, res) => {
//     res.sendStatus(StatusCodes.OK)
// })


module.exports = app;