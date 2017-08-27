var path = require('path');
var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/create', express.static(path.join(__dirname, 'public/make.html')))

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
