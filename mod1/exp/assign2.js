const express = require('express')
const fs=require('fs')
const app = express()
const PORT=5000
app.get('/', function (req, res) {
  res.send('Hello World')

})
app.get('/getMovies', function (req, res) {
    fs.readFile("./db.json",(err,result)=>
    {
        if(err)
            {
                console.log(err)
            }
            else{
                res.send(JSON.parse(result))
            }
    })
   
  
  })

app.listen(PORT,()=>console.log("the server started on the port",PORT))