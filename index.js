var fs = require("fs")
var express = require('express')
var app = express()

var buf = fs.readFileSync("index.html", "utf8")

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(buf.toString(buf))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
