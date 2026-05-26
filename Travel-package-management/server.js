const express = require("express")

const app = express()

const packageRoute = require("./Routes/packageRoute")

const port = process.env.PORT || 5003


app.use(express.json())

app.get('/' , (req,res)=>{
    res.send("Server started")
})

app.use('/package' , packageRoute )

app.listen(port , ()=>{
    console.log(`server running on http://localhost:${port}`)
})