const express = require('express');
const http = require('http')
const winston = require('winston')

// Config
const PORT = 3000
const HOST = '0.0.0.0'

// Log
/* const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console()),
        new (winston.transports.File)({ filename: '../logs/weblog.log'})
    ]
}) */

const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: '../logs/weblog.log' })
    ]
});

// App
const app = express()

app.use(express.static('public'))

app.get('/',(req, res) => {
    res.send('<h1>Hello World!...</h1><img src="dog.png"/>')
})

const server = http.createServer(app)

// Logger error
server.on('error', (error) => {
    logger.log('error', error)
})

//app.listen(PORT, HOST)
server.listen(PORT, HOST, () => {
    logger.log('info', `Server started on ${new Date()} at http://${HOST}:${PORT}`)
})

//console.log(`Running at http://${HOST}:${PORT}`)
