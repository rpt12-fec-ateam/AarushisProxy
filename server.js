const express = require('express');
const path = require('path');
const http = require('http');
const url  =  require('url');
const querystring  = require('querystring');
const httpProxy  = require('http-proxy');
const proxy = httpProxy.createProxyServer();

const port = 5000;

const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/public'));
app.use('/item/:id', express.static(__dirname + '/public'));

app.get('/allReviews/item/:id', function(req, res) {
  console.log('req.params.id in /allReviews', req.params.id);
  proxy.web(req, res, { target: 'http://localhost:9000' });
});

app.get('/allItems/item/:id', function(req, res) {
  console.log('req.params.id in /allItems', req.params.id);
  proxy.web(req, res, { target: 'http://localhost:9000' });
});

app.listen(port, () => {
  console.log('server running at: ', port);
})

