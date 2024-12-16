const { Model, DataTypes } = require("sequelize");
const {sequelize} = require("../database");

class Values extends Model{}

Values.init({
    number:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Values',
    tableName: 'values'
})

module.exports = Values;