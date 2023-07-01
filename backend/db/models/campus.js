const {DataTypes} = require('sequelize');
const db = require('../db');

const Campus = db.define('Campus', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: 'https://commons.wikimedia.org/wiki/File:Image_not_available.png',
        allowNull: false,
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