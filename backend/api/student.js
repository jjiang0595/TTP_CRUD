const express = require('express');
const router = express.Router();
const {Student} = require('../db/models');

router.get("/", async (req, res, next) => {
    try {
        const students = await Student.findAll();
        students
            ? res.status(200).json(students)
            : res.status(404).send("Students Not Found");
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id);
        student
            ? res.status(200).json(student)
            : res.status(404).send("Student Not Found");
    } catch (err) {
        next(err);
    }
});

router.post("/add", async (req, res, next) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const {firstName, lastName, email, imageUrl, gpa} = req.body;
        const student = await Student.findByPk(req.params.id);
        if (student) {
            await student.update({firstName, lastName, email, imageUrl, gpa});
            res.status(200).json(student);
        } else {
            res.status(404).send("Student Not Found");
        }
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            await student.destroy();
            res.status(200).send("Successfully Deleted");
        } else {
            res.status(404).send("Student Not Found");
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;