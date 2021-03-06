// server.js
// where your node app starts

// init project
var express = require('express')
var app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors')
app.use(cors({optionsSuccessStatus: 200}))  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'})
})

app.get('/api', (req, res) => {
  const result = new Date()
  res.json({
    unix: result.getTime(),
    utc: result.toUTCString()
  })
})

app.get('/api/:date', (req, res) => {
  const input = req.params.date

  console.log(input)

  let result = ''
  if (input.includes('-') || input.includes(' ')) result = new Date(input)
  else result = new Date(Number(input))
  
  if (result.toString() === 'Invalid Date') res.json({ error: 'Invalid Date' })
  else { 
    res.json({
      unix: result.getTime(),
      utc: result.toUTCString()
    })
   }
})


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
