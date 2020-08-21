const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
/**
 * GET route template
 */
router.get("/", (req, res) => {
  let queryText = `SELECT * FROM oyster_types ORDER BY name ASC;`;

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("ERROR IN OYSTER GET", error);
    });
});

/**
 * POST route template
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  let globalLocation = req.body.global_location;
  let name = req.body.name;
  let description = req.body.description;
  let geo_location = req.body.geo_location;

  let queryText = `INSERT INTO oyster_types (global_location, name, description, geo_location) VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [globalLocation, name, description, geo_location])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
