const express = require("express");
const app = express();
const usersRouter = require('./routes/users');


app.get("/", (req, res) => res.send("Hello, World!"));
app.use('/users', usersRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log('My first Express app - listening on port ${PORT}!');
});