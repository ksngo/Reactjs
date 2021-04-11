const React = require('react')
const ReactDOM = require('react-dom')

class Button extends React.Component {

    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div>
                {this.props.store.map((item, index)=>{
                return <button key={index}> #{item} </button>})}
            </div>
          
        )
    }
}

module.exports = Button