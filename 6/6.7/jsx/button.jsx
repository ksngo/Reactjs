class ClickCounterButton extends React.Component{
    render(){
        return <button
        onClick={this.props.handler}
        className="btn btn-danger"
        > Increase Volume (Current Vollume is {this.props.counter} ) </button>
    }
}