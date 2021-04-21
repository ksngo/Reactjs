import React from 'react';
import classnames from 'classnames'

function Square(props){
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class App extends React.Component{

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            one : "",
            two : "",
            three : "",
            four : "",
            five : "",
            six : "",
            seven : "",
            eight : "",
            nine : "",
            player : true
        }
    }

    componentDidMount(){
        
    }

    handleClick = e => {
        if(this.state.player){
            this.setState({ [e.target.className] : "O"})
        } else {
            this.setState({ [e.target.className] : "X"})
        }
        this.setState({player: !this.state.player})
    }
    


    render(){

        return (
            <div>
                <div>
                    <Square className={classnames('one')} onClick={this.handleClick} value={this.state.one}/>
                    <Square className="two" onClick={this.handleClick} value={this.state.two}/>
                    <Square className="three" onClick={this.handleClick} value={this.state.three}/>
                </div>
                <div>
                    <Square className="four" onClick={this.handleClick} value={this.state.four}/>
                    <Square className="five" onClick={this.handleClick} value={this.state.five}/>
                    <Square className="six" onClick={this.handleClick} value={this.state.six}/>
                </div>
                <div>
                   <Square className="seven" onClick={this.handleClick} value={this.state.seven}/>
                   <Square className="eight" onClick={this.handleClick} value={this.state.eight}/>
                    <Square className="nine" onClick={this.handleClick} value={this.state.nine}/>
                </div>
            </div>
        )
    }
} 


export default App ;

// module.exports = APP