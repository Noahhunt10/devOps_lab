const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '311f1a54f5484766b1694f8301ae4b24',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world')


app.use(cors())
app.use(express.json())
app.use(express.static('public'))




app.get('/', (req,res) => {
    console.log(__dirname)
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))

})

app.get('/error', (req, res) => {
    try {
      doesNotExsist();
    }catch(err){
      rollbar.log('This is an error')
    }

})
app.get('/warning', (req, res) => {
  try {
    doesNotExsist();
  }catch(err){
    rollbar.log('This is a warning')
  }

})
app.get('/critical', (req, res) => {
  try {
    doesNotExsist();
  }catch(err){
    rollbar.log('This is CRITICAL')
  }

})


app.listen(4000, console.log('Server running on 4000.'))