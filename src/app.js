require("express-async-errors");
const express = require("express");
const config = require("./config");
const loaders = require("./loaders");
const { UserRoutes } = require("./routers");


config();
loaders();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING ${process.env.PORT}`)
    app.use("/user", UserRoutes, function (req, res, next) {
        console.log(req)

        

    })
    



})