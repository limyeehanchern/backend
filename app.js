const express = require("express");
const app = express();
const cors = require("cors");
const createDatabase = require("./db");
const router = express.Router();
const posting = require("./routes/posting.js");
const admin = require("./routes/admin.js");
const getting = require("./routes/getting.js");

createDatabase();
app.use(cors());
app.use(express.json());
app.use("/api/v1/post", posting);
app.use("/api/v1/admin", admin);
app.use("/api/v1/get", getting);

app.listen(5000, () => {
  console.log("Server started on port http://localhost:5000");
});

// router.route("/voting").get();
// router.route("/postman").post(createPersonPostman);
// router.route("/:id").put(updatePerson).delete(deletePerson);

// module.exports = router;
