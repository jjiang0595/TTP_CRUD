const router = require("express").Router();

router.use("/campuses", require("./campus"));
router.use("/students", require("./student"));

router.use((req, res, next) => {
    const error = new Error("404 Not Found");
    error.status = 404;
    next(error);
});

module.exports = router;
