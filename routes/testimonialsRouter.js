const express = require("express");
const testimonialsRouter = express.Router();

testimonialsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the testimonials to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the testimonials: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /testimonials");
  })
  .delete((req, res) => {
    res.end("Deleting all testimonials");
  });

module.exports = testimonialsRouter;
