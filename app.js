const express = require("express");
const app = express();
const cors = require("cors");
const createDatabase = require("./db");
const router = express.Router();
const voting = require("./routes/voting.js");
const admin = require("./routes/admin.js");

createDatabase();
app.use(cors());
app.use(express.json());
app.use("/api/v1/voting", voting);
app.use("/api/v1/admin");

app.listen(5000, () => {
  console.log("Server started on port http://localhost:5000");
});

// router.route("/voting").get();
// router.route("/postman").post(createPersonPostman);
// router.route("/:id").put(updatePerson).delete(deletePerson);

// module.exports = router;
