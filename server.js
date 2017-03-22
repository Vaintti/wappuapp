var express = require('express')
var app = express()

app.use(express.static('build'))

app.set('port',process.env.PORT || 3001)

require('./api/vitsit')(app)

app.listen(app.get('port'), function () {
  console.log('Server listening!')
})