
class Content extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.prompt = "Please enter your email!";
    }

    submit(event) {
        let emailAddress = this.refs.emailAddress;
        let comments = this.refs.comments;
        console.log(emailAddress);
        console.log(comments);
        console.log(ReactDOM.findDOMNode(emailAddress).value);
        console.log(ReactDOM.findDOMNode(comments).value);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'well' },
            React.createElement(
                'p',
                null,
                ' ',
                this.prompt
            ),
            React.createElement(
                'div',
                { className: 'form-group' },
                'Email: ',
                React.createElement('input', { type: 'text', ref: 'emailAddress', className: 'form-control', placeholder: 'ks.ngo@email.com' })
            ),
            React.createElement(
                'div',
                { className: 'form-group' },
                'Comments: ',
                React.createElement('textarea', { ref: 'comments', className: 'form-control', placeholder: 'I like this website!' })
            ),
            React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                    'a',
                    { className: 'btn btn-primary', value: 'Submit', onClick: this.submit },
                    'Submit'
                )
            )
        );
    }
}