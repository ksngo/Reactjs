import React, { Fragment } from 'react';
import classnames from 'classnames'

function Square(props) {
    return (
        <button className={props.className} onClick={props.onClick} disabled={props.isdisabled}>
            {props.value}
        </button>
    )
}

class App extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
        this.isGameOver = this.isGameOver.bind(this)
        this.identifyOX = this.identifyOX.bind(this)
        this.restart = this.restart.bind(this)

        this.state = {

            results: {
                one: { display: "", player: null },
                two: { display: "", player: null },
                three: { display: "", player: null },
                four: { display: "", player: null },
                five: { display: "", player: null },
                six: { display: "", player: null },
                seven: { display: "", player: null },
                eight: { display: "", player: null },
                nine: { display: "", player: null },
            },
            currentPlayer: 1,
            disabled: false
        }
    }

    componentDidMount() {

    }

    isGameOver() {
        const conditions = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [3, 6, 9],
            [3, 5, 7],
            [1, 5, 9],
            [2, 5, 8]
        ]


        const player1Selection = this.identifyOX().arrayForO
        const player2Selection = this.identifyOX().arrayForX
        console.log('player1Selection : ', player1Selection)
        console.log('player2Selection : ', player2Selection)
        console.log(`next player : ${this.state.currentPlayer}`)

        for (let i = 1; i < 9; i++) {
            console.log(`checking condition ${i} : ${conditions[i - 1]}`)
            if (this.state.currentPlayer === 2) {
                if (conditions[i - 1].every((number) => {
                    return player1Selection.includes(number)
                })) { return true }
            } else if (this.state.currentPlayer === 1) {
                if (conditions[i - 1].every((n) => player2Selection.includes(n))) {
                    return true
                }
            }

        }

        return false

    }

    identifyOX() {
        let arrayForO = []
        let arrayForX = []

        const identifier = {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine"
        }

        for (let i = 1; i < 10; i++) {

            if (this.state.results[identifier[i]].display === "O") {
                arrayForO.push(i)
            } else if (this.state.results[identifier[i]].display === "X") {
                arrayForX.push(i)

            }
        }
        return { arrayForO, arrayForX }
    }

    handleClick = async (e) => {
        if (this.state.currentPlayer === 1) {

            this.setState(prevState => {
                let tempObj = Object.assign({}, prevState.results)
                tempObj[e.target.className].display = "O"
                tempObj[e.target.className].player = 1
                return { results: tempObj }
            })
            await this.setState({ currentPlayer: 2 })
        } else {
            this.setState(prevState => {
                let tempObj = Object.assign({}, prevState.results)
                tempObj[e.target.className].display = "X"
                tempObj[e.target.className].player = 2
                return { results: tempObj }
            })
            await this.setState({ currentPlayer: 1 })
        }

        if (this.isGameOver()) {
            console.log("isGameOver? : true")
            this.setState({ disabled: true })
        } else {
            console.log("isGameOver? : false")
        }

    }

    restart(){
        this.setState(()=>{
            const myobj = {
                one: { display: "", player: null },
                two: { display: "", player: null },
                three: { display: "", player: null },
                four: { display: "", player: null },
                five: { display: "", player: null },
                six: { display: "", player: null },
                seven: { display: "", player: null },
                eight: { display: "", player: null },
                nine: { display: "", player: null },
            }
            return {results : myobj}
        })
        this.setState({disabled : false})
    }



    render() {

        return (
            <Fragment>
                <div>
                    <div>
                        <Square className={classnames('one')} onClick={this.handleClick} value={this.state.results.one.display} isdisabled={this.state.disabled} />
                        <Square className="two" onClick={this.handleClick} value={this.state.results.two.display} isdisabled={this.state.disabled} />
                        <Square className="three" onClick={this.handleClick} value={this.state.results.three.display} isdisabled={this.state.disabled} />
                    </div>
                    <div>
                        <Square className="four" onClick={this.handleClick} value={this.state.results.four.display} isdisabled={this.state.disabled} />
                        <Square className="five" onClick={this.handleClick} value={this.state.results.five.display} isdisabled={this.state.disabled} />
                        <Square className="six" onClick={this.handleClick} value={this.state.results.six.display} isdisabled={this.state.disabled} />
                    </div>
                    <div>
                        <Square className="seven" onClick={this.handleClick} value={this.state.results.seven.display} isdisabled={this.state.disabled} />
                        <Square className="eight" onClick={this.handleClick} value={this.state.results.eight.display} isdisabled={this.state.disabled} />
                        <Square className="nine" onClick={this.handleClick} value={this.state.results.nine.display} isdisabled={this.state.disabled} />
                    </div>
                </div>
                <button disabled={!this.state.disabled} onClick={this.restart}> Start </button>


            </Fragment>

        )
    }
}


export default App;

// module.exports = APP