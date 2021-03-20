class Menu extends React.Component{
    render(){
        let menus = ['Home','About','Services','Portfolio','Contact us']
        //Array.map() returns an array

        return React.createElement(
            'div',
            null,
            menus.map((v,i)=>{
                return(
                    React.createElement(
                        'div',
                        {key:i},
                        React.createElement(Link,{label:v, number:i})
                    )
                )
            }).reverse()
        )

    }
}

class Link extends React.Component{
    render(){
        const url='/'+this.props.label.toLowerCase().trim().replace(' ','-')

        return React.createElement('div',null,
            React.createElement('a',{href:url},this.props.label + ' ' + this.props.number),
            React.createElement('br')
        )
    }
}

ReactDOM.render(
    React.createElement(
        Menu,
        null
    ),
    document.getElementById('menu')
)