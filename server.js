const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');

const port = 5000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('server running at: ', port);
})

