const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const usersRouter = require('./routes/users');

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello, World!"));
app.use('/users', usersRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log('My first Express app - listening on port ${PORT}!');
});