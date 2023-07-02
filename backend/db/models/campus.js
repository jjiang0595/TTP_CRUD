const {DataTypes} = require('sequelize');
const db = require('../db');

const Campus = db.define('Campus', {
    campusId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Campus;