class Menu extends React.Component {

    constructor() {
        super();
        this.state = { menu: [] };
    }

    componentDidMount() {
        fetch('../menu.json').then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        }).then(data => {
            console.log("inside componentwillmount : ", data);
            this.setState({ menu: data.menu });
            console.log("inside componentwillmount : ", this.state.menu);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        console.log("inside render: ", this.state.menu);
        // const menu = ['Home', 'Directory', 'Contact']

        // React will disregard async here
        // async function fetchJson(){
        //     const response = await fetch('../menu.json')
        //     const data= await response.json()
        //     console.log(data)
        //     menu = data.menu
        // }

        // fetchJson();
        // console.log(menu)

        return this.state.menu.map((v, i) => {
            return React.createElement(
                "div",
                { key: i },
                React.createElement(Link, { scope: v, number: i })
            );
        });
    }

}

class Link extends React.Component {

    render() {
        const url = '/' + this.props.scope.toLowerCase().trim().replace(' ', '-');

        return React.createElement(
            "div",
            null,
            React.createElement(
                "a",
                { href: url },
                this.props.scope + ' ' + this.props.number
            ),
            React.createElement("br", null)
        );
    }

}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu'));