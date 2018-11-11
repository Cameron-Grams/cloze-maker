const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static( path.join( __dirname,  '/build') ) );

app.get('/*', function (req, res) {
    console.log( 'in server with req: ', req );
  return res.sendFile( path.join( __dirname, 'build', 'index.html') );
});

app.listen(port, () => console.log( 'listening on port: ', port ) );