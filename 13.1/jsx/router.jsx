const React = require('react')

module.exports = class Router extends React.Component{
    constructor(props){
        super(props)
        this.state={hash: window.location.hash} 
        this.updateHash=this.updateHash.bind(this)

    }
    updateHash(event){
        console.log('updatehash(event)')
        this.setState({hash: window.location.hash})
    }

    componentDidMount(){
        console.log("componentDidMount()")
        window.addEventListener('hashchange', this.updateHash, false)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount()")
        window.removeEventListener('hashchange', this.updateHash, false)
    }

    render(){
        console.log('render()')
        if (this.props.mapping[this.state.hash])
            return this.props.mapping[this.state.hash]
        else
            return this.props.mapping['*']
    }
}