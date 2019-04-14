import React from 'react'
import '../App.css'

class TodoItem extends React.Component {
    constructor(props) {
        super()
    }
    click(item) {
        console.log(item)
        this.props.handleDelete(item)
    }
    render() {
        return <li className="li-style" onClick={this.click.bind(this, this.props.name)}>{this.props.name}</li>
    }
}

export default TodoItem