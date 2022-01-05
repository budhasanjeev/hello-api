const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello API!");
});

app.post("/approvalSync1", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!! after 100ms ms");
  }, 100)
});

app.post("/approvalSync2", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!! after 1000 ms");
  }, 1000)
});

app.post("/approvalSync3", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!! after 2000 ms");
  }, 2000)
});

app.post("/approvalSync4", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!! after 10000 ms");
  }, 10000)
});

app.post("/approvalSync5", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!! after 20000 ms");
  }, 20000)
});

app.post("/approvalSync6", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!! after 50000 ms");
  }, 50000)
});

app.post("/approvalSync7", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!! after 100000 ms");
  }, 70000)
});

app.post("/approvalSync8", (req, res, next) => {
  res.status(404);
  res.send("Not Found");
});

app.post("/approvalSync9", (req, res, next) => {
  res.status(503);
  res.send("Service unavailable");
});

app.listen(port, () => {
  console.log('server running on port 3000', '');
});