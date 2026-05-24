const { log } = require('console')
const http = require('http')
const os = require('os')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    res.end("This is my first server")
})

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());

console.log(__dirname)

fs.writeFileSync('message.txt', 'We are learning Node.js')

const fileData = fs.readFileSync('message.txt','utf-8')
console.log(fileData)


server.listen(5000,()=>{
    console.log("server started...")
})
