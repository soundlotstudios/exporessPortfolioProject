const express = require("express");
const skillsRouter = express.Router();

skillsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the skills to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the skills: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /skills");
  })
  .delete((req, res) => {
    res.end("Deleting all skills");
  });

module.exports = skillsRouter;
