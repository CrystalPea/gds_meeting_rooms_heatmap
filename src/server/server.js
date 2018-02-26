const express = require('express')
const app = express()
import { Validator, ValidationError } from 'express-json-validator-middleware'
import { rooms } from './rooms'

var validator = new Validator({allErrors: true})

app.get('/rooms', function (req, res) {
  res.send(rooms);
})

app.get('/', function (req, res) {
  res.render('index', {})
})

app.set('json spaces', 2);
app.use(express.json())
app.use(express.static('./dist/public'))
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug')

app.use(function(err, req, res, next) {
  let responseData;

  if (err.name === 'JsonSchemaValidationError') {
    res.status(400)
    res.send(err.validationErrors)
  } else {
    next(err);
  }
});

app.listen(3000)
