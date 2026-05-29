const express = require("express");
const cors = require("cors");
const connectDB = require("./database");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/mood", require("./routes/mood"));
app.use("/api/journal", require("./routes/journal"));
app.use("/api/report", require("./routes/report"));

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
