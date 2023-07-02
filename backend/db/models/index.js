const Campus = require('./campus');
const Student = require('./student');

Student.belongsTo(Campus, {
    foreignKey: "campusId",
    allowNull: true
});
Campus.hasMany(Student, {
    foreignKey: "campusId",
    allowNull: true
});

module.exports = {
    Campus,
    Student,
};