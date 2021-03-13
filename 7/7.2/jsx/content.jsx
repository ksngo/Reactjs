
class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this) // to ensure handler method knows that this refers to this class instead of windows
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleTextarea= this.handleTextarea.bind(this)
        this.handleSelectChange= this.handleSelectChange.bind(this)
        this.handleMultipleSelectChange= this.handleMultipleSelectChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)

        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            },
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            },
            description: "initial description",
            selectedValue: 'node',
            multipleSelectedValue: []
        }
    }

    handleRadio(event) {
        let obj = {} // object can be empty because Radio only have one true value
        obj[event.target.value] = event.target.checked
        this.setState({ radioGroup: obj })
    }

    handleCheckbox(event){
        let obj = Object.assign(this.state.checkboxGroup) //clone an object from state as checkboxes can have multiple true values
        obj[event.target.value] = event.target.checked // update event retrieved boolean in the object key's value
        this.setState({checkboxGroup: obj}) // set State now with the latest object
    }
    handleTextarea(event){
        this.setState({description: event.target.value})
    }
    handleSelectChange(event){
        this.setState({selectedValue: event.target.value})
    }
    handleMultipleSelectChange(event){
        console.log(event.target.value)
        this.setState({multipleSelectedValue: [event.target.value]})
    }
    handleSubmit(event){
        console.log(this.props['data-url'])
        console.log(JSON.stringify(this.state))
        fetch(this.props['data-url'],{method:'POST', body:JSON.stringify(this.state)})
        .then((response)=>{return response.json()})
        .then((data)=>{console.log('Submitted: ', data)})
    }

    render() {
        return <form>
            <h3> Radio Buttons</h3>
            <label>angular</label>
            <input type='radio' name='radioGroup' value='angular' checked={this.state.radioGroup['angular']} onChange={this.handleRadio} />
            <label>react</label>
            <input type='radio' name='radioGroup' value='react' checked={this.state.radioGroup['react']} onChange={this.handleRadio} />
            <label>polymer</label>
            <input type='radio' name='radioGroup' value='polymer' checked={this.state.radioGroup['polymer']} onChange={this.handleRadio} />
            <br></br>
            <h3> Checkboxes </h3>
            <label>node</label>
            <input type="checkbox" name='checkboxGroup' value='node' checked={this.state.checkboxGroup['node']} onChange={this.handleCheckbox} />
            <label>React</label>
            <input type="checkbox" name='checkboxGroup' value='react' checked={this.state.checkboxGroup['react']} onChange={this.handleCheckbox} />
            <label>Express</label>
            <input type="checkbox" name='checkboxGroup' value='express' checked={this.state.checkboxGroup['express']} onChange={this.handleCheckbox} />
            <label>MongoDB</label>
            <input type="checkbox" name='checkboxGroup' value='mongodb' checked={this.state.checkboxGroup['mongodb']} onChange={this.handleCheckbox} />
            <h3>textarea</h3>
            <textarea name='description' value={this.state.description} onChange={this.handleTextarea} /> 
            <h3>select options</h3>
            <select value={this.state.selectedValue} onChange={this.handleSelectChange}>
                <option value='ruby'>Ruby</option>
                <option value='node'>Node</option>
                <option value='python'>Python</option>
            </select>
            <h3>multipple select options <span> (Not working as expected)</span></h3>
            {/* multiple attribute is true */}
            <select value={['ruby','python']} multiple={true} onChange={this.handleMultipleSelectChange} >
                <option value='ruby'>Ruby</option>
                <option value='node'>Node</option>
                <option value='python'>Python</option>
            </select>
            <h3> Submit form</h3>
            <input type='button' onClick={this.handleSubmit} value='Submit'/>
        </form>
    }

}