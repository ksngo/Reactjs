const React = require('react')
const ReactDOM = require('react-dom')
const request = require('axios')

const url = 'http://localhost:3000/messages'
const fD = ReactDOM.findDOMNode

class MessageList extends React.Component {
  render() {
    var messages = this.props.messages
    if (!messages || !messages.length>0) return (
        <p>No messages yet</p>
    )
    return (
      <table className="table ">
        <caption>Messages</caption>
        <thead>
          <tr>
            <th className="span2">Name</th>
            <th className="span10">Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(function(message){
            return (
              <tr key={message._id}>
                <td className="span2">{message.name}</td>
                <td className="span10">{message.message}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

class NewMessage extends React.Component {
  constructor(props) {
    super(props)
    this.addMessage = this.addMessage.bind(this)
    this.keyup = this.keyup.bind(this)
  }
  addMessage() {
    let name = fD(this.refs.name).value.trim()
    let message = fD(this.refs.message).value.trim()
    if (!name || !message) {
      return console.error('Name and message cannot be empty')
    }
    this.props.addMessageCb({
      name: name,
      message: message
    })
    fD(this.refs.name).value = ''
    fD(this.refs.message).value = ''
  }
  keyup(e) {
    if (e.keyCode == 13) return this.addMessage()
  }

  //**(1) input into the ref="name" and ref="message" are available from this.refs.name and this.refs.message  */
  render() {
    return (
      <div className="row-fluid" id="new-message">
        <div className="span12">
          <form className="well form-inline" onKeyUp={this.keyup} onSubmit={this.addMessage}>
            <input
              type="text" name="username"
              className="input-small" placeholder="Azat" ref="name"/>
            <input
              type="text" name="message" className="input-small"
              placeholder="Hello!" ref="message" />
            <a id="send" className="btn btn-primary"
              onClick={this.addMessage}>POST</a>
          </form>
        </div>
      </div>
    )
  }
}

class MessageBoard extends React.Component {
  constructor(ops) {
    super(ops)
    this.addMessage = this.addMessage.bind(this)
    //**(3) this.props.messages are the mongo collection data */
    if (this.props.messages)
      this.state = {messages: this.props.messages}
  }
  componentDidMount() {

    //**(4) GET request to localhost:3000/messages , reponse.data will be the mongo collection data */
    //**(5) state will be updated with the latest mongo collection data. */
    request.get(url)
      .then(response => response.data)
      .then(messages => {
        console.log(messages)
        if(!messages || !messages.length){
          return;
        }
        console.log(messages)
        this.setState({messages: messages})
      })
  }

  //**(2) message is an object. {name:name , message:message} */
  addMessage(message) {
    let messages = this.state.messages
    //**(6) POST request to localhost:3000/messages, the new message will be added to mongo data*/
    //**(7) Upon success mongo updated, the response containing the new message will used to update in this component State. */
    //**(8) I think when state is updated, a render will run again, hence view will show the new messages too. */
    request.post(url, message)
      .then(result => result.data)
      .then((data) =>{
        if(!data){
          return console.error('Failed to save')
        }
        console.log('Saved!')
        messages.unshift(data)
        this.setState({messages: messages})
    })
  }
  render() {
    return (
      <div>
        <NewMessage messages={this.state.messages} addMessageCb={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

module.exports = MessageBoard