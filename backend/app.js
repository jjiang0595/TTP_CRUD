const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

app.use(cors({
    origin: "https://main--storied-capybara-5303a7.netlify.app"
}));
app.use(express.json());

app.use("/api", require("./api"));

db.sync();

const port = 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;