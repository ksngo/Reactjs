// Approach 1: Variable
function render1() {
    let link;
    if (this.props.user.session) link = React.createElement(
        'a',
        { href: '/logout' },
        'Logout'
    );else link = React.createElement(
        'a',
        { href: '/login' },
        'Login'
    );
    return React.createElement(
        'div',
        null,
        link
    );
}

// Approach 2: Expression
function render2() {
    let link = sessionFlag => {
        if (sessionFlag) return React.createElement(
            'a',
            { href: '/logout' },
            'Logout'
        );else return React.createElement(
            'a',
            { href: '/login' },
            'Login'
        );
    };
    return React.createElement(
        'div',
        null,
        link(this.props.user.session)
    );
}

// Approach 2a: Expression( Using IIFE, immediately invoked function)
function render2a() {
    return React.createElement(
        'div',
        null,
        (sessionFlag => {
            if (sessionFlag) return React.createElement(
                'a',
                { href: '/logout' },
                'Logout'
            );else return React.createElement(
                'a',
                { href: '/login' },
                'Login'
            );
        })(this.props.user.session)
    );
}

// Approach 3: Ternary operator
function render3() {
    return React.createElement(
        'div',
        null,
        this.props.user.session ? React.createElement(
            'a',
            { href: '/logout' },
            'Logout'
        ) : React.createElement(
            'a',
            { href: '/login' },
            'Login'
        )
    );
}

// Approach 3: Ternary operator (Others)
function render3a() {
    let sessionFlag = this.props.user.session;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'a',
            { href: sessionFlag ? '/logout' : '/login' },
            sessionFlag ? 'Logout' : 'Login'
        )
    );
}
