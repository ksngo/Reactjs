class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'ul',
                null,
                React.createElement(
                    'li',
                    { style: { listStyleType: 'none' } },
                    React.createElement(
                        'a',
                        { href: '#' },
                        'Home'
                    )
                ),
                React.createElement(
                    'li',
                    { style: { listStyleType: 'none' } },
                    React.createElement(
                        'a',
                        { href: '#' },
                        'About'
                    )
                ),
                React.createElement(
                    'li',
                    { style: { listStyleType: 'none' } },
                    React.createElement(
                        'a',
                        { href: '#' },
                        'Services'
                    )
                ),
                React.createElement(
                    'li',
                    { style: { listStyleType: 'none' } },
                    React.createElement(
                        'a',
                        { href: '#' },
                        'Portfolio'
                    )
                ),
                React.createElement(
                    'li',
                    { style: { listStyleType: 'none' } },
                    React.createElement(
                        'a',
                        { href: '#' },
                        'Contact us'
                    )
                )
            )
        );
    }
}