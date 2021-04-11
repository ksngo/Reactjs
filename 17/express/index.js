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
require('babel-register')({ presets: ['react'] })
//**(6) allow convert JSX to JS on the fly */
const ReactDOMServer = require('react-dom/server')
const { fstat } = require('fs')

const About = React.createFactory(require('./components/about.jsx'))
//**(1) create react element from component class */

const app = express()

//**(2) set configs */
app.set('view engine', 'hbs')

//**(3) Routing */

app.get('/', (req, res, next) => {
    res.send("hello!")
})
app.get('/about', (req, res, next) => {
    const aboutHTML = ReactDOMServer.renderToString(About())
    //**(7) renderToString renders About react element to HTML string with React markup */
    // res.send(aboutHTML)
    res.render('about', { about: aboutHTML })
    //**(8) Passes React HTML string to Handlebars template ./views/about.hbs; default folder is views */
    //**(12) about here refers to the hbs template in views folder */
    //**(13) res.render is express feature for serving templates to browser */
    //**(14) the about in {about: aboutHTML} will pass react components/elements data to the template(about.hbs) */
})

//** To explore more complex rendering of hbs  */
//**(a) req.rooms is refering to db.collection()...(unimportant) */
//**(b) index in res.render refers to views/index.hbs*/
//**(c) the 2nd argument in res.render contains autocomplete and data properties*/
//**(d) autocomplete and data will be variables in the views/index.hbs */
//**(e) the 2nd argument is to pass data into views/index.hbs */
//**(f) autocomplete contains the html string based on Autocomplete react component. The component contains properties options(documents data from mongo) and url string */
//**(g) data contains a script  */
// app.get('this-is-for-explanation-purpose-only', function (req, res, next) {
//     var url = 'http://localhost:3000/rooms'
//     req.rooms.find({}, { sort: { _id: -1 } }).toArray(function (err, rooms) {
//         if (err) return next(err)
//         res.render('index', {
//             autocomplete: ReactDOMServer.renderToString(Autocomplete({
//                 options: rooms,
//                 url: url
//             })),
//             data: `<script type="text/javascript">
//                     window.__autocomplete_data = {
//                     rooms: ${JSON.stringify(rooms, null, 2)},
//                     url: "${url}"
//                     }
//                     </script>`
//         })
//     })
// })

app.all('*', (req, res, next) => {
    res.status(404).send('Not found....')
})
app.use((error, req, res, next) => {
    console.error(req.url, error)
    res.send('Wonderful error')
})

//**(4) middlewares */
app.use(errorHandler)
app.use(express.static(path.join(__dirname, 'public')))
//** static middleware turns Express into a static HTTP(S) server that proxies requests to files in a specified folder */

//**(5) Boots up server */
// app.listen(PORT, console.log('Server is connected to ',PORT))
http.createServer(app).listen(3000, () => {
    console.log('HTTP server listening to 3000.')
})

try {
    const options = {
        key: fs.readFileSync('./http.Server.key'),
        cert: fs.readFileSync('./server.crt')
    }
} catch (e) {
    console.warn('Error in Create server.key and server.crt for HTTPS')
}

if (typeof options != 'undefined')
    https.createServer(app, options).listen(443)