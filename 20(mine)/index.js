const express = require('express')
const path = require('path')

const app = express()
const http = require('http')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})



app.use('/static', express.static(path.join(__dirname,'public')))

// app.listen( 3000, ()=>{
//     console.log('App listening at port 3000.')
// })

http.createServer(app).listen(3000, ()=>{
    console.log('HTTP server listening to 3000.')
})