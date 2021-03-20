class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { choice: 0 };
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer() {
        let count;
        this.setState({ choice: this.props.time });
        console.log(this.state.choice);
        if (this.state.choice) {
            console.log('inside if');
            setInterval(() => {
                if (this.state.choice) {
                    count = this.state.choice - 1;
                    this.setState({ choice: count });
                }
            }, 1000);
        }
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: this.startTimer },
                ' ',
                this.props.time + ' seconds'
            ),
            this.props.children + ' ' + this.state.choice
        );
    }
}

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
        Button,
        { time: '5' },
        ' Timer left: '
    )
), document.getElementById('timer'));