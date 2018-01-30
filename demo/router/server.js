// npm install express

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use(express.static('./')) // 静态资源
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})