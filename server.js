const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use(express.static( path.join( __dirname,  '/build') ) );

app.get('/*', function (req, res) {
  return res.sendFile( path.join( __dirname, 'build', 'index.html') );
});

app.listen(port, () => console.log( 'listening on port: ', port ) );
