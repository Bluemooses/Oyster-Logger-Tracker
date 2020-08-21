const pg = require("pg");
const url = require("url");

let dbUser = process.env.DB_USER;
let dbPassword = process.env.DB_PASSWORD;
let dbHost = process.env.DB_HOST;
let db = process.env.DB;


let config = {};

// This configuration connects to the database in AWS called ' pretslonboardingapptest '

config = {
  user: dbUser,
  password: dbPassword,
  host: dbHost,
  port: 5432,
  database: db,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on("error", (err) => {
  console.log("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
