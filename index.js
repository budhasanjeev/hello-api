const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

app.listen(3000, (err) => {
  if (err) throw err
  console.log('Server running in http://127.0.0.1:3000')
});