const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post("/approvalSync1", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!!");
  }, 100)
});

app.post("/approvalSync2", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!!");
  }, 1000)
});

app.post("/approvalSync2", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!!");
  }, 2000)
});

app.post("/approvalSync2", (req, res, next) => {
  setTimeout(() => {
    res.json("I am wake!!");
  }, 10000)
});

app.listen(3000, (err) => {
  if (err) throw err
  console.log('Server running in http://127.0.0.1:3000')
});