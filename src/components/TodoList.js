import React, { Component } from 'react'
import TodoItem from './TodoItem'
import DigitalClock from './DigitalClock'


class TodoList extends Component{
    constructor(props) {
      super()
      this.state = {
        list: [],
        value: ''
      }
    }
    render() {
      return (
        <div>
          <div>
            <input type="text"  value={this.state.value} onChange={this.changeInput.bind(this)}/>
            <button onClick={this.addList.bind(this)}>add</button>
          </div>
          <ul>
            {this.state.list.map((item, index) => {
              return <TodoItem handleDelete={this.handleDelete.bind(this)}key={index} name={item}/>
            })}
          </ul>
          <DigitalClock name={123}/>
        </div>
      )
    }
    addList() {
      this.setState({value: ''})
      this.setState({list: [this.state.value, ...this.state.list]})
    }
    changeInput(e) {
      this.setState({value: e.target.value})
    }
    delete(item) {
      const list = this.state.list.filter(i => i !== item)
      this.setState({list: [...list]})
    }
    handleDelete(item) {
      this.delete(item)
    }
}

export default TodoList