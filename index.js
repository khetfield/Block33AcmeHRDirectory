const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/employees", require("./employees"));
app.use("/api/departments", require("./departments"));

app.listen(8080, () => {
  console.log("App is running at port 8080");
});