const React = require('react')
// React is required in this jsx file because when jsx converts to js, React.createElement() statements will need React

module.exports = function Contact(props) {
  // setTimeout(()=>{props.router.push('about')}, 1000)
  return <div>
    <h3>Contact Us</h3>
    <input type="text" placeholder="your email" className="form-control"></input>
    <textarea type="text" placeholder="your message" className="form-control"></textarea>
    <button className="btn btn-primary">send</button>
  </div>
}