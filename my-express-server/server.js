const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact', (req, res) => {
  res.send('contact me : bhaskarkulshrestha03@gmail.com')
})
app.get('/about', (req, res) => {
  res.send('my name is bhaskar kulshrestha <br> i am a software developer and a web developer and enthusiast')
})
app.get('/hobbies', (req, res) => {
  res.send('<li>Code</li><li>Coffee</li><li>leetcode</li><li>Games</li>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})