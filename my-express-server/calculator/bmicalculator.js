const express = require('express')
const port = 3001
const bodyparser=require('body-parser');

const app = express()
app.use(bodyparser.urlencoded({extended:true}))
// it allows us to post nested objects 


app.get('/',(req,res)=>{

res.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/" , function(req,res){
    var h = parseFloat(req.body.height)
    var w = parseFloat(req.body.weight)
    var result = w/(h*h)
   
    res.send('The BMI is :' + result +" :) <br>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  