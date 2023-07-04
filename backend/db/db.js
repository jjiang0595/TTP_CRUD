const {Sequelize} = require('sequelize');

const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.DB_URI)
const db = new Sequelize(process.env.DB_URI, {
    logging: false,
    dialectModule: require('pg'),
});

module.exports = db;