const express = require('express')
const studentRoute  =  require('./router/student')
const app  = express()
const port   = process.env.PORT || 3300
app.use(express.json())
app.use(studentRoute); 
app.listen(port,()=>{
    console.log(`${port} port  number is used `);
})
