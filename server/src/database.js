const {Sequelize} = require('sequelize');
const keys = require("./keys");

const sequelize = new Sequelize(keys.pgDatabase, keys.pgUser, keys.pgPassword, {
    host: keys.pgHost,
    dialect: 'postgres',
    logging: console.log,
});

sequelize.afterConnect(async (config) => {
    console.log("Database connection established")
});

sequelize.afterDisconnect(async (conn) => {
    console.log("Database  disconnected ")
})


module.exports = {
    sequelize
}