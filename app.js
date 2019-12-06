const express = require('express');
const data = require('./data.json');
const path = require('path');
const pug = require('pug');

app.set('view engine', 'pug')
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })