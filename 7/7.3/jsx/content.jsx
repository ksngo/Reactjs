
class Content extends React.Component{

    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
        this.prompt = "Please enter your email!"
    }

    submit(event){
        let emailAddress = this.refs.emailAddress 
        let comments = this.refs.comments
        console.log(emailAddress)
        console.log(comments)
        console.log(ReactDOM.findDOMNode(emailAddress).value) //ReactDOM.findDOMNode(this.refs.emailAddress).value ; //this cannot work!
        // need a reference(this example shows reference) or callback
        console.log(ReactDOM.findDOMNode(comments).value)
    }

    render(){
        return (
            <div className='well'>
                <p> {this.prompt}</p>
                <div className='form-group'>
                    Email: <input type='text' ref='emailAddress' className='form-control' placeholder='ks.ngo@email.com' />
                </div>
                <div className='form-group'>
                    Comments: <textarea ref='comments' className='form-control' placeholder='I like this website!' />
                </div>
                <div className='form-group'>
                    <a className='btn btn-primary' value='Submit' onClick={this.submit}>Submit</a>
                </div>


            </div>

        )
    }
}