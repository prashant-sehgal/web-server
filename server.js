const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from server:${process.env.PORT}`);
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
