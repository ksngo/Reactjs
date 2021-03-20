class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
                    <ul >
                        <li style={{listStyleType: 'none'}}><a href='#'>Home</a></li>
                        <li style={{listStyleType: 'none'}}><a href='#'>About</a></li>
                        <li style={{listStyleType: 'none'}}><a href='#'>Services</a></li>
                        <li style={{listStyleType: 'none'}}><a href='#'>Portfolio</a></li>
                        <li style={{listStyleType: 'none'}}><a href='#'>Contact us</a></li>
                    </ul>
                </div>
    }
}