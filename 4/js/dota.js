const HelloWorld = props => {
    return React.createElement(
        "h1",
        props,
        " Hello Dota 2 '",
        props.heroName,
        "' Pick Me! "
    );
};