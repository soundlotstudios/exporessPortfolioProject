const express = require("express");
const workExperienceRouter = express.Router();

workExperienceRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the workExperience to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the workExperience: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /workExperience");
  })
  .delete((req, res) => {
    res.end("Deleting all workExperience");
  });

module.exports = workExperienceRouter;
