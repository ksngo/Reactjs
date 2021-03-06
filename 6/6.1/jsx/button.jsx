class SaveButton extends React.Component {
    handleSave(event){
        console.log(this, event)
    }
    render(){
        return <div>
            <button onClick={this.handleSave.bind(this)}> Save </button>
            <label onMouseOver={()=>console.log("Mouse is over")}> my label </label> 
        </div>
    }
}

// @ Using constructor binding for .bind(this)

// class SaveButton extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleSave =  this.handleSave.bind(this)
//     }
//     handleSave(event){
//         console.log(this, event)
//     }
//     render(){
//         return <button onClick={this.handleSave}> Save </button>
//     }
// }