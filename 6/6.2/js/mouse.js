class Mouse extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                {
                    style: { border: '1px solid red' },
                    onMouseOverCapture: (event => {
                        console.log('mouse over on capture event');
                        console.dir(event, this);
                    }).bind(this),
                    onMouseOver: (event => {
                        console.log('mouse over on bubbling event');
                        console.dir(event);
                        console.dir(event, this);
                        console.dir(event.target);
                        console.dir(event.currentTarget);
                        console.dir(event.nativeElement);
                    }).bind(this) },
                'Open DevTools and move your mouse cursor over here'
            )
        );
    }
}