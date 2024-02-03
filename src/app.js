import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

var app = express();

// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/api", indexRouter);
app.use("/", indexRouter);
app.use("/api/users", usersRouter);

app.use("/api/number/:number", function (req, res, next) {
  const number = req.params.number;
  res.send({
    number,
    random: Math.floor(Math.random() * 1000 + 1),
  });
});

app.use("/api/number", function (req, res, next) {
  const number = req.query.number;
  res.send({
    number,
    random: Math.floor(Math.random() * 1000 + 1),
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send({
    message: "Not found",
    path: req.path,
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
