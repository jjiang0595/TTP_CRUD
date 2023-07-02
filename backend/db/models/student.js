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
                msg: "Invalid+ email address format",
            }
        }
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    gpa: {
        type: DataTypes.DECIMAL(3, 1),
        validate: {
            min: 0.0,
            max: 4.0
        }
    },
    campusId: {
        type: DataTypes.INTEGER,
        default: 0,
        allowNull: true
    }
});

module.exports = Student;