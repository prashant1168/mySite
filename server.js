var express = require('express');
var path = require('path');
var app = express();

// server configuration
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'Index.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/About', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'About.html'));
});

app.get('/Contact', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'Contact.html'));
});

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://localhost:8888", host, port);
});
