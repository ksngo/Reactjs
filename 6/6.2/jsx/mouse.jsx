class Mouse extends React.Component {
    render() {
        return <div>
            <div
                style={{ border: '1px solid red' }}
                onMouseOverCapture={((event) => {
                    console.log('mouse over on capture event')
                    console.dir(event, this)
                }).bind(this)}
                onMouseOver={((event) => {
                    console.log('mouse over on bubbling event')
                    console.dir(event) // syntheticBaseEvent
                    console.dir(event, this) // syntheticBaseEvent
                    console.dir(event.target) //div
                    console.dir(event.currentTarget) //div
                    console.dir(event.nativeElement) //undefined
                }).bind(this)} >
                Open DevTools and move your mouse cursor over here
            </div>
        </div>
    }
}