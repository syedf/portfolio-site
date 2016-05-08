/**
 * Created by Faizan on 5/8/2016.
 */
var express = require('express');

var app = express();

app.use(express.static('app'));
app.get('/*', function (req, res) {
    res.sendfile(__dirname + '/app/index.html');
});
app.listen(3000, function () {
    console.log("Server running at 3000");
});