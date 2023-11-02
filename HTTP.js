const express = require("express");
const app = express();

app.listen(3000, ()=> {
  console.log("Server started. port 3000.");
});

app.get("/customer", (req, res) => {
  res.send("get 요청에 대한 응답");
})

app.post("/customer", (req, res) => {
  res.send("post 요청에 대한 응답");
});

app.all("/customer", (req, res) => {
  res.send("모든 요청에 대한 응답");
});
