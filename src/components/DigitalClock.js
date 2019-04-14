import React from 'react'

class DigitalClock extends React.Component {
    constructor(props) {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.siv = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }
    componentDidUpdate(currentProps, currentState) {
        // console.log('currentProps', currentProps)
        // console.log('currentState', currentState)
    }
    componentWillUnmount() {
        clearInterval(this.siv)
    }
    render() {
        return (
            <div className="clock">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default DigitalClock