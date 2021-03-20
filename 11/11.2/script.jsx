class Timewrapper extends React.Component {
    constructor(props){
        super(props)
        this.state={timeLeft: null, timer:null}
        this.startTimer = this.startTimer.bind(this)
    }

    startTimer(timeLeft){
        clearInterval(this.state.timer)
        let timer = setInterval(()=>{
            let timeLeft = this.state.timeLeft -1
            if (timeLeft == 0) clearInterval(timer)
            this.setState({timeLeft: timeLeft})
        }, 1000)
        return this.setState({timeLeft:timeLeft, timer: timer})
    }
    render(){
        return(
        <div className='row-fluid'>
            <h2> Timer</h2>
            <div className='btn-group' role='group'>
                <Button time='5' startTimer={this.startTimer} />
                <Button time='10' startTimer={this.startTimer}/>
                <Button time='15' startTimer={this.startTimer}/>
            </div>
            <Timer timeLeft={this.state.timeLeft} />
        </div>)
    }
}

class Button extends React.Component {
    constructor(props){
        super(props)
    }

    //** The function passed to onClick must be a definition and not an invocation!!!
    //** Following will not work...*/
    // render(){
    //     <button className='btn-default btn' type='button' onClick={this.props.startTimer(this.props.time)} > {this.props.time} seconds</button>
    // }

    render(){
        return(
            <button className='btn-default btn' type='button' onClick={()=>{this.props.startTimer(this.props.time)}} > {this.props.time} seconds</button>
        )
        
    }
}

class Timer extends React.Component {
    render(){
        if(this.props.timeLeft == null || this.props.timeLeft ==0)
            return <div/>
        return <h1>Time left: {this.props.timeLeft} </h1>
    }
}

ReactDOM.render(
    <Timewrapper/>,
    document.getElementById('timer')
)