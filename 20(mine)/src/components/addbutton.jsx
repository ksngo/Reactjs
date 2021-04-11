const React = require('react')
const ReactDOM = require('react-dom')

class Addbutton extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <button onClick={this.props.add}> + {this.props.displayname} </button>
        )
    }
}

module.exports = Addbutton