var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));

app.disable('x-powered-by');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'public'));
        });

app.listen(app.get('port'), function() {
    console.log('Express started press Ctrl-C to terminate');
});


/*
var express = require('express');
var path = require('path');
var app = express();


app.disable('x-powered-by');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });

app.listen(app.get('port'), function() {
    console.log('Express started press Ctrl-C to terminate');
});
*/