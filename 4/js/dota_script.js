ReactDOM.render(React.createElement('div', null, React.createElement(HelloWorld, {
    id: 'ember', heroName: 'EmberSpirit', description: 'fire spirit'
}), React.createElement(HelloWorld, {
    id: 'pa', heroName: 'PhantomAssasin', description: 'agility assassin'
}), React.createElement(HelloWorld, {
    id: 'usra', heroName: 'UsraWarrior', description: 'angry swarp bear'
})), document.getElementById('content'));