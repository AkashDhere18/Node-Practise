const express = require('express')

const app = express()

const empRoute = require('./Routes/empRoute')

const port = process.env.PORT || 5003

//Middleware
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Server is started")
})

app.use('/emp', empRoute)



app.listen(port ,()=>{
    console.log(`server running on http://localhost:${port}`)
})