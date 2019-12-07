const express = require('express');
const data = require('./data.json');
const path = require('path');

// Set view engine
app.set('view engine', 'pug')
// 
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })  