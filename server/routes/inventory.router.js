const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  let userId = req.user.id;
  console.log(req.user.id);
  let queryText = `SELECT * FROM inventory WHERE user_id=$1 ORDER BY oyster_name ASC;`;

  pool
    .query(queryText, [userId])
    .then((result) => {
      console.log();
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("ERROR IN OYSTER INVENTORY GET", error);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log(req.body);
  let ship_date = req.body.ship_date;
  let current_count = req.body.current_count;
  let oyster_name = req.body.oyster_name;
  let previous_count = req.body.current_count;
  let user_id = req.body.user_id;
  let original_count = req.body.current_count;

  let queryText = `INSERT INTO inventory (ship_date, previous_count, current_count, oyster_name, original_count, user_id) VALUES ($1, $2, $3, $4, $5, $6);`;

  pool
    .query(queryText, [
      ship_date,
      previous_count,
      current_count,
      oyster_name,
      original_count,
      user_id,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
