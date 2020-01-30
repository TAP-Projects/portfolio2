const path = require("path"); // for __dirname
const express = require("express");
const logger = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const data = require("./data.json");

// Instantiate the app instance
const app = express();

// Set view engine
app.set("view engine", "pug");
// Set view directory
app.set("views", path.join(__dirname, "views"));

// Log requests
app.use(logger("dev"));
// Serve favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// Parse json
app.use(bodyParser.json());
// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));
// Set public directory
app.use("/static", express.static(path.join(__dirname, "public")));

/*
ROUTES
*/

// Render a home page
app.get("/", function(req, res) {
	res.render("index", {data});
});

// Render an about page
app.get("/about", function(req, res) {
	res.render("about");
});

// Render project pages
app.get("/projects/:id", function(req, res) {
  const project = data.projects.filter(proj => req.params.id === proj.id)[0];
	res.render("project", {project});
});

/*
ERROR HANDLING
*/

// catch 404 and forward to error handler from http-errors
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// Set message to err.message
	res.locals.message = err.message;
	// Set status to err.status
	res.locals.status = err.status || 500
	// Set the response status to err status or 500
	res.status(err.status || 500);
	// Render the error page
	res.render("error");
});

module.exports = app;