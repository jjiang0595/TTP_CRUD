const {DataTypes} = require('sequelize');
const db = require('../db');

const Student = db.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Invalid email address format",
            }
        }
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg'
    },
    gpa: {
        type: DataTypes.DECIMAL(3, 1),
        validate: {
            min: 0.0,
            max: 4.0
        }
    }
});

module.exports = Student;