const ReactDOMServer = require('react-dom/server')
const React = require('react')
const Email = React.createFactory(require('./email.js'))

//**(1) createFactory turns component class to React element */

const emailString = ReactDOMServer.renderToString(Email())

//**(2) renderToString turns the React element to strings that can be use in template engine */

console.log(emailString)

const emailStringWithName = ReactDOMServer.renderToString(Email({name: 'John Walker'}))
console.log(emailStringWithName)