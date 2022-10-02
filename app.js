const express = require('express');
const cors = require('cors');
require("./config/db");

const userRouter = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);

app.get("/", (req, res, next) =>{
    res.sendFile(__dirname + "/./views/index.html");
});

app.get((req, res, next) =>{
    res.status(404).json({
        message: "Not Found"
    });
});

app.get((err, req, res, next) =>{
    res.status(505).json({
        message: "Somthing Wrong"
    });
});


module.exports = app;