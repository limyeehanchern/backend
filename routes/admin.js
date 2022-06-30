const express = require("express");
const router = express.Router();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "limmy",
  password: "password",
  port: "5432",
});

router.post("/postquestion", (req, res) => {
  const { content, optionzero, optionone, salt } = req.body;
  pool.query(
    `INSERT INTO question (content, optionzero, optionone, salt) VALUES ('${content}', '${optionzero}', '${optionone}', '${salt}');`,
    (err, res) => {
      if (err) {
        console.log(err);
        console.log("Question error");
        return;
      }
    }
  );
});

router.post("/emergencyrepay", (req, res) => {
  console.log(req.body);
});

router.post("/reveal", (req, res) => {
  const { qid } = req.body;
  pool.query(
    `SELECT address, option, unix, salt FROM votes WHERE qid = ${qid};`,
    (err, res) => {
      if (err) {
        console.log(err);
        console.log("Question error");
        return;
      }
      res.status(201).send(tup.rows);
    }
  );
});

module.exports = router;
