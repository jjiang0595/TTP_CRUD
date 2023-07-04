const express = require('express');
const router = express.Router();
const {Campus: Campuses} = require('../models');

router.get("/", async (req, res, next) => {
    try {
        const campuses = await Campuses.findAll();
        campuses
            ? res.status(200).json(campuses)
            : res.status(404).send("Campuses Not Found");
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const campus = await Campuses.findByPk(req.params.id);
        campus
            ? res.status(200).json(campus)
            : res.status(404).send("Campuses Not Found");
    } catch (err) {
        next(err);
    }
});

router.post("/add", async (req, res, next) => {
    const {name, imageUrl, address, description} = req.body;
    try {
        const newCampus = await Campuses.create({name, imageUrl, address, description});
        res.status(201).json(newCampus);
    } catch (err) {
        next(err);
    }
});

router.put("/:id/edit", async (req, res, next) => {
    try {
        const {name, imageUrl, address, description} = req.body;
        const campus = await Campuses.findByPk(req.params.id);
        if (campus) {
            await campus.update({name, imageUrl, address, description});
            res.status(200).json(campus);
        } else {
            res.status(404).send("Campuses Not Found");
        }
    } catch (err) {
        next(err);
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const campus = await Campuses.findByPk(req.params.id);
        if (campus) {
            await campus.destroy();
            res.status(200).send("Successfully Deleted");
        } else {
            res.status(404).send("Campuses Not Found");
        }
    } catch (err) {
        next(err);
    }
})

module.exports = router;