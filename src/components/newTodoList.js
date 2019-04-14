import React from 'react'
import store from '../store/'
import {getInputChangeAction, getAddItemAction, getDelItemAction, getTodoList} from '../store/actionCreators'
import TodoListUI from './newTodoListUI'
 

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                deleteItem = {this.deleteItem}
                list={this.state.list}
            />
        )
    }
    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }
    handleInputChange(e) {
        console.log(e.target.value)
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange() {
        console.log('store changed')
        this.setState(store.getState())
    }
    handleBtnClick() {
        console.log(99)
        const action = getAddItemAction(this.state.inputValue)
        store.dispatch(action)
    }
    deleteItem(item) {
        console.log(item)
        const action = getDelItemAction(item)
        store.dispatch(action)
    }
}

export default TodoList