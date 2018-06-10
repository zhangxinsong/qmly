const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const reg = require('./routes/reg')
const reg2 = require('./routes/reg2')
const login = require('./routes/login')
const login2 = require('./routes/login2')
const task = require('./routes/task')
const person = require('./routes/person')
const person2 = require('./routes/person2')
const forget = require('./routes/forget')
const luxian = require('./routes/luxian')
const dingdan = require('./routes/dingdan')

mongoose.connect('mongodb://localhost:27017/BlogData')

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.all('*', function(req, res, next) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.setHeader("Access-Control-Expose-Headers", "*");
  next();
})

app.use('/reg',reg)
app.use('/reg2',reg2)
app.use('/login',login)
app.use('/login2',login2)
app.use('/task',task)
app.use('/person',person)
app.use('/person2',person2)
app.use('/forget',forget)
app.use('/luxian',luxian)
app.use('/dingdan',dingdan)
app.use('/',(req,res) => {
  res.send('Yo!');
})


app.listen(3000,() => {
    console.log('app listening on port 3000.')
})