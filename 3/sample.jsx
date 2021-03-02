// Approach 1: Variable
function render1() {
    let link
    if (this.props.user.session)
        link = <a href='/logout'>Logout</a>
    else
        link = <a href='/login'>Login</a>
    return <div>{link}</div>
}

// Approach 2: Expression
function render2() {
    let link = (sessionFlag) => {
        if (sessionFlag)
            return <a href='/logout'>Logout</a>
        else
            return <a href='/login'>Login</a>
    }
    return <div>{link(this.props.user.session)}</div>
}

// Approach 2a: Expression( Using IIFE, immediately invoked function)
function render2a() {
    return <div>{
        ((sessionFlag) => {
            if (sessionFlag)
                return <a href='/logout'>Logout</a>
            else
                return <a href='/login'>Login</a>
        })(this.props.user.session)
    }</div>
}

// Approach 3: Ternary operator
function render3() {
    return <div>
        {(this.props.user.session) ? <a href='/logout'>Logout</a> : <a href='/login'>Login</a>}
    </div>
}

// Approach 3: Ternary operator (Others)
function render3a() {
    let sessionFlag = this.props.user.session
    return <div>
        <a href={(sessionFlag) ? '/logout' : '/login'}>
            {(sessionFlag) ? 'Logout' : 'Login'}
        </a>
    </div>
}
