const React = require('react')
const ReactDOM = require('react-dom')

class Inputcom extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <input onChange={this.props.find}></input>
        )
        
    }

}


module.exports = Inputcom