const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const router = require('./router')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const config = require('./config')

mongoose.connect(config.mongoUri, { useNewUrlParser: true })

app.use((req,res,next) => {
  console.log(req.headers)
  next()
})
app.use(cookieParser())
app.use(bodyParser.json({ type: '*/*' }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) })
}

const port = process.env.PORT || 4000
const server = http.createServer(app)

router(app)

server.listen(port, () => console.log('Server listening on:', port))
