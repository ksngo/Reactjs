
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this); // to ensure handler method knows that this refers to this class instead of windows
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleTextarea = this.handleTextarea.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleMultipleSelectChange = this.handleMultipleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        };
    }

    handleRadio(event) {
        let obj = {}; // object can be empty because Radio only have one true value
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }

    handleCheckbox(event) {
        let obj = Object.assign(this.state.checkboxGroup); //clone an object from state as checkboxes can have multiple true values
        obj[event.target.value] = event.target.checked; // update event retrieved boolean in the object key's value
        this.setState({ checkboxGroup: obj }); // set State now with the latest object
    }
    handleTextarea(event) {
        this.setState({ description: event.target.value });
    }
    handleSelectChange(event) {
        this.setState({ selectedValue: event.target.value });
    }
    handleMultipleSelectChange(event) {
        console.log(event.target.value);
        this.setState({ multipleSelectedValue: [event.target.value] });
    }
    handleSubmit(event) {
        console.log(this.props['data-url']);
        console.log(JSON.stringify(this.state));
        fetch(this.props['data-url'], { method: 'POST', body: JSON.stringify(this.state) }).then(response => {
            return response.json();
        }).then(data => {
            console.log('Submitted: ', data);
        });
    }

    render() {
        return React.createElement(
            'form',
            null,
            React.createElement(
                'h3',
                null,
                ' Radio Buttons'
            ),
            React.createElement(
                'label',
                null,
                'angular'
            ),
            React.createElement('input', { type: 'radio', name: 'radioGroup', value: 'angular', checked: this.state.radioGroup['angular'], onChange: this.handleRadio }),
            React.createElement(
                'label',
                null,
                'react'
            ),
            React.createElement('input', { type: 'radio', name: 'radioGroup', value: 'react', checked: this.state.radioGroup['react'], onChange: this.handleRadio }),
            React.createElement(
                'label',
                null,
                'polymer'
            ),
            React.createElement('input', { type: 'radio', name: 'radioGroup', value: 'polymer', checked: this.state.radioGroup['polymer'], onChange: this.handleRadio }),
            React.createElement('br', null),
            React.createElement(
                'h3',
                null,
                ' Checkboxes '
            ),
            React.createElement(
                'label',
                null,
                'node'
            ),
            React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', value: 'node', checked: this.state.checkboxGroup['node'], onChange: this.handleCheckbox }),
            React.createElement(
                'label',
                null,
                'React'
            ),
            React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', value: 'react', checked: this.state.checkboxGroup['react'], onChange: this.handleCheckbox }),
            React.createElement(
                'label',
                null,
                'Express'
            ),
            React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', value: 'express', checked: this.state.checkboxGroup['express'], onChange: this.handleCheckbox }),
            React.createElement(
                'label',
                null,
                'MongoDB'
            ),
            React.createElement('input', { type: 'checkbox', name: 'checkboxGroup', value: 'mongodb', checked: this.state.checkboxGroup['mongodb'], onChange: this.handleCheckbox }),
            React.createElement(
                'h3',
                null,
                'textarea'
            ),
            React.createElement('textarea', { name: 'description', value: this.state.description, onChange: this.handleTextarea }),
            React.createElement(
                'h3',
                null,
                'select options'
            ),
            React.createElement(
                'select',
                { value: this.state.selectedValue, onChange: this.handleSelectChange },
                React.createElement(
                    'option',
                    { value: 'ruby' },
                    'Ruby'
                ),
                React.createElement(
                    'option',
                    { value: 'node' },
                    'Node'
                ),
                React.createElement(
                    'option',
                    { value: 'python' },
                    'Python'
                )
            ),
            React.createElement(
                'h3',
                null,
                'multipple select options ',
                React.createElement(
                    'span',
                    null,
                    ' (Not working as expected)'
                )
            ),
            React.createElement(
                'select',
                { value: ['ruby', 'python'], multiple: true, onChange: this.handleMultipleSelectChange },
                React.createElement(
                    'option',
                    { value: 'ruby' },
                    'Ruby'
                ),
                React.createElement(
                    'option',
                    { value: 'node' },
                    'Node'
                ),
                React.createElement(
                    'option',
                    { value: 'python' },
                    'Python'
                )
            ),
            React.createElement(
                'h3',
                null,
                ' Submit form'
            ),
            React.createElement('input', { type: 'button', onClick: this.handleSubmit, value: 'Submit' })
        );
    }

}