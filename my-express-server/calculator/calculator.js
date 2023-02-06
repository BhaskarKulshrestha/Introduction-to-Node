const express = require('express')
const port = 3000
const bodyparser=require('body-parser');

const app = express()
app.use(bodyparser.urlencoded({extended:true}))
// it allows us to post nested objects 


app.get('/',(req,res)=>{
// res.send('<h1>Hello world</h1>')
// console.log(__dirname + "/index.html")
res.sendFile(__dirname + "/index.html")
})

app.post("/" , function(req,res){
    var a = Number(req.body.num1)
    var b = Number(req.body.num2)
    var result = a+b
res.send('The result of calcualtion is :' + result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })