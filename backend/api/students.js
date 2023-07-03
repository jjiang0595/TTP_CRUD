const express = require('express');
const router = express.Router();
const {Student: Students} = require('../db/models');

router.get("/", async (req, res, next) => {
    try {
        const students = await Students.findAll();
        students
            ? res.status(200).json(students)
            : res.status(404).send("Students Not Found");
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const student = await Students.findByPk(req.params.id);
        student
            ? res.status(200).json(student)
            : res.status(404).send("Students Not Found");
    } catch (err) {
        next(err);
    }
});

router.post("/add", async (req, res, next) => {
    const {firstName, lastName, email, imageUrl, gpa} = req.body;
    try {
        const newStudent = await Students.create({firstName, lastName, email,imageUrl, gpa});
        newStudent ?
            res.status(201).json(newStudent)
            : res.status(404).send("Error Creating Students")
    } catch (err) {
        next(err);
    }
});

router.put("/:id/edit", async (req, res, next) => {
    try {
        const {firstName, lastName, email, imageUrl, gpa, campusId} = req.body;
        const student = await Students.findByPk(req.params.id);
        if (student) {
            await student.update({firstName, lastName, email, imageUrl, gpa, campusId});
            res.status(200).json(student);
        } else {
            res.status(404).send("Students Not Found");
        }
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const student = await Students.findByPk(req.params.id);
        if (student) {
            await student.destroy();
            res.status(200).send("Successfully Deleted");
        } else {
            res.status(404).send("Students Not Found");
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;