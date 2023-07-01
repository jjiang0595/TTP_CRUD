const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// add routes here

const port = 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

db.sync().then(() => {
    console.log("Successfully connected to database")
}).catch ((err) => {
    console.log("Error connecting to database: ", err)
});