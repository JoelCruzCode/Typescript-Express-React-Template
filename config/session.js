require("dotenv").config();
const { SESSION_KEY } = process.env;
const session = require("express-session");
const pg = require("connect-pg-simple")(session);
const pool = require("./database");

module.exports = session({
	store: new pg({ pool: pool, createTableIfMissing: true }),
	secret: SESSION_KEY,
	resave: false,
	saveUninitialized: true,
});

