const { Fragment } = require('react')
const React = require('react')
const ReactDOM = require('react-dom')

const Inputcom = require('./input.jsx')
const Button = require('./button.jsx')
const Addbutton = require('./addbutton.jsx')

class Main extends React.Component{

    constructor(){
        super()
        this.state = {
            store: ['angular', 'node', 'static'],
            instancestore: [],
            isStore: true,
            showAddButton: false,
            addButtonName: ''
        }
        this.find = this.find.bind(this)
        this.add = this.add.bind(this)
    }

    find(event){
        
        this.setState({isStore: false , addButtonName: event.target.value})
        let regex = new RegExp('^'+event.target.value,'g')
        let results = this.state.store.filter((item)=> regex.test(item))
        if (results.length === 0){
            this.setState({showAddButton: true})
        }
        this.setState({instancestore : results})
    }

    add(){
        let updatedstore = this.state.store
        updatedstore.push(this.state.addButtonName)
        this.setState({ store: updatedstore })
        this.setState({isStore: true})
        this.setState({showAddButton: false})
    }

    render(){
        return (
            <Fragment>
                <Inputcom find={this.find}/>
                <Button store={ this.state.isStore ? this.state.store : this.state.instancestore} />
                { this.state.showAddButton ? <Addbutton displayname={this.state.addButtonName} add={this.add}/> : null }
            </Fragment>
        )
    }
}

module.exports = Main