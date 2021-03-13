// import { stringify , parse } from 'flatted';

// console.log(typeof stringify)

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            email: "",
            phone: ""
        };
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        this.setState({ email: event.target.email.value });
        alert("Form is submitted");
        // let eventObject = JSON.parse(event)
        // console.log(eventObject)
        this.downloadObjectAsJson(event, 'eventfile');
        console.log('event.target[0].value : ', event.target[0].value);
        console.log('event.target.elements.email.value : ', event.target.elements.email.value);
        console.log(' event.target.email.value : ', event.target.email.value);
        // console.log(this.inputNode.value)
        alert("check console.");
    }

    // getCircularReplacer() {
    //     const seen = new WeakSet();
    //     return (key, value) => {
    //         if (typeof value === "object" && value !== null) {
    //             if (seen.has(value)) {
    //                 return;
    //             }
    //             seen.add(value);
    //         }
    //         return value;
    //     };
    // };

    downloadObjectAsJson(exportObj, exportName) {
        console.log(typeof exportObj);
        console.log(exportObj);
        console.log(Flatted.stringify(exportObj));
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(Flatted.stringify(exportObj));
        console.log(dataStr);
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        alert("exit downloadObjectAsJson.");
    }

    handleKeyUp(event) {
        // if (event.keyCode == 13) {
        //     this.setState({phone: event.target.phone.value})
        //     console.log('event.target[0].value : ',event.target[0].value)
        //     console.log('event.target.elements.phone.value : ',event.target.elements.phone.value)
        //     console.log(' event.target.email.value : ',event.target.phone.value)
        //     // console.log(this.inputNode.value)
        //     alert("check console.")
        // }
        // this.setState({ phone: event.target.phone.value })
        console.log(event);
        console.log(event.target);
        console.log('event.target[0].value : ', event.target[0].value);
        console.log('event.target.elements.phone.value : ', event.target.elements.phone.value);
        console.log(' event.target.email.value : ', event.target.phone.value);
        // console.log(this.inputNode.value)
        alert("check console.");
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                " input tag with ",
                React.createElement(
                    "strong",
                    null,
                    "onChange (React DOM event for forms) "
                ),
                " that trigger method to setState based on event.target.value; input tag value attribute equals this.state.title "
            ),
            React.createElement("input", { type: "text", name: "title", value: this.state.title,
                onChange: this.handleChange.bind(this) }),
            React.createElement(
                "p",
                null,
                " form tag with ",
                React.createElement(
                    "strong",
                    null,
                    " onSubmit (React DOM event for form)"
                )
            ),
            React.createElement(
                "form",
                { onSubmit: this.handleSubmit.bind(this) },
                React.createElement("input", { type: "text", name: "email" })
            ),
            React.createElement(
                "p",
                null,
                "  form tag with ",
                React.createElement(
                    "strong",
                    null,
                    " onKeyUp (Standard React DOM event e.g. onKeyUp, onClick)"
                )
            ),
            React.createElement(
                "form",
                { onKeyUp: this.handleKeyUp.bind(this) },
                React.createElement("input", { type: "text", name: "phone" })
            )
        );
    }
}

// export default Content;