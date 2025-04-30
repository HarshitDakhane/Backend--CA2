const express = require('express')
const app = express()

app.use(express.json())



app.get('/',(req,res)=>{
  res.send("working")
})

app.put('/',(req,res)=>{
  const {email ,pass} = req.body

  if(!email){
    res.status(400).json({error:"Email not found"})
  }
  if(!pass|| pass.length()<8||pass.length>16){
    res.status(400).json({error:"Password length should be greater than 8 or less than or qual to 16"})
  }
})


    


app.listen(3000,()=>{
  console.log("server is running on http://localhost:3000")
})