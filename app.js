const express = require('express');
const data = require('./data.json');
// Used when setting express.static()
const path = require('path');

// Set view engine
app.set('view engine', 'pug')
// Use express.static to set the root folder and any options
app.use(express.static('public'))

/*
ROUTES
*/

// Render a home page
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })  


  app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })  
