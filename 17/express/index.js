const express = require('express')
const errorHandler = require('errorhandler')
const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')

const React = require('react')
//**(9) babel-preset-react is provided in package.json */
//**(10) need to put "babel":{ "presets" : ["react"]} in package.json*/
//**(11) instead of using babel-cli, we are using babel-register to  allow convert JSX to JS on the fly */
require('babel-register')({presets: ['react']})
//**(6) allow convert JSX to JS on the fly */
const ReactDOMServer = require('react-dom/server')
const { fstat } = require('fs')

const About = React.createFactory(require('./components/about.jsx'))
//**(1) create react element from component class */

const app = express()

//**(2) set configs */
app.set('view engine', 'hbs')

//**(3) Routing */

app.get('/', (req, res, next)=>{
    res.send("hello!")
})
app.get('/about', (req,res,next)=>{
    const aboutHTML = ReactDOMServer.renderToString(About())
    //**(7) renderToString renders About react element to HTML string with React markup */
    // res.send(aboutHTML)
    res.render('about', {about: aboutHTML})
    //**(8) Passes React HTML string to Handlebars template ./views/about.hbs; default folder is views */
    //**(12) about here refers to the hbs template in views folder */
    //**(13) res.render is express feature for serving templates to browser */
    //**(14) the about in {about: aboutHTML} will pass react components/elements data to the template(about.hbs) */
})
app.all('*',(req,res,next)=>{
    res.status(404).send('Not found....')
})
app.use((error, req, res, next)=>{
    console.error(req.url, error)
    res.send('Wonderful error')
})

//**(4) middlewares */
app.use(errorHandler)
app.use(express.static(path.join(__dirname,'public')))
//** static middleware turns Express into a static HTTP(S) server that proxies requests to files in a specified folder */

//**(5) Boots up server */
// app.listen(PORT, console.log('Server is connected to ',PORT))
http.createServer(app).listen(3000, ()=>{
    console.log('HTTP server listening to 3000.')
})

try {
    const options = {
        key: fs.readFileSync('./http.Server.key'),
        cert: fs.readFileSync('./server.crt')
    }
} catch (e){
    console.warn('Error in Create server.key and server.crt for HTTPS')
}

if (typeof options != 'undefined')
    https.createServer(app,options).listen(443)