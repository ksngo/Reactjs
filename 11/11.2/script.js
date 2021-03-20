class Timewrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timeLeft: null, timer: null };
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            let timeLeft = this.state.timeLeft - 1;
            if (timeLeft == 0) clearInterval(timer);
            this.setState({ timeLeft: timeLeft });
        }, 1000);
        return this.setState({ timeLeft: timeLeft, timer: timer });
    }
    render() {
        return React.createElement(
            'div',
            { className: 'row-fluid' },
            React.createElement(
                'h2',
                null,
                ' Timer'
            ),
            React.createElement(
                'div',
                { className: 'btn-group', role: 'group' },
                React.createElement(Button, { time: '5', startTimer: this.startTimer }),
                React.createElement(Button, { time: '10', startTimer: this.startTimer }),
                React.createElement(Button, { time: '15', startTimer: this.startTimer })
            ),
            React.createElement(Timer, { timeLeft: this.state.timeLeft })
        );
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    //** The function passed to onClick must be a definition and not an invocation!!!
    //** Following will not work...*/
    // render(){
    //     <button className='btn-default btn' type='button' onClick={this.props.startTimer(this.props.time)} > {this.props.time} seconds</button>
    // }

    render() {
        return React.createElement(
            'button',
            { className: 'btn-default btn', type: 'button', onClick: () => {
                    this.props.startTimer(this.props.time);
                } },
            ' ',
            this.props.time,
            ' seconds'
        );
    }
}

class Timer extends React.Component {
    render() {
        if (this.props.timeLeft == null || this.props.timeLeft == 0) return React.createElement('div', null);
        return React.createElement(
            'h1',
            null,
            'Time left: ',
            this.props.timeLeft,
            ' '
        );
    }
}

ReactDOM.render(React.createElement(Timewrapper, null), document.getElementById('timer'));