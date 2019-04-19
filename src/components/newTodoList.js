import React, { useState, useEffect } from 'react'
import store from '../store/'
import {getInputChangeAction, getAddItemAction, getDelItemAction, getTodoList} from '../store/actionCreators'
import TodoListUI from './newTodoListUI'
import {connect} from 'react-redux'
 
function TestHook() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
        return () => clearInterval(interval)
    })
    return <div>{count}</div>
}

// class TestHook extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     componentDidMount() {
//         this.setInter = setInterval(() => {
//             this.setState({
//                 count: this.state.count + 1
//             })
//         }, 1000)
//     }
//     componentWillUnmount() {
//         clearInterval(this.setInter)
//     }
//     render() {
//         return <div>{this.state.count}</div>
//     }
// }

class TodoList extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = store.getState()
    //     // this.handleInputChange = this.handleInputChange.bind(this)
    //     // this.handleStoreChange = this.handleStoreChange.bind(this)
    //     // this.handleBtnClick = this.handleBtnClick.bind(this)
    //     // this.deleteItem = this.deleteItem.bind(this)
    //     // store.subscribe(this.handleStoreChange)
    // }

    render() {
        const {inputValue,list, handleBtnClick,handleInputChange,deleteItem} = this.props

        return (
            <div>
            <TodoListUI
                inputValue={inputValue}
                handleInputChange={handleInputChange}
                handleBtnClick={handleBtnClick}
                deleteItem = {deleteItem}
                list={list}
            />
            <TestHook />
            </div>
        )
    }
    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }
    // handleInputChange(e) {
    //     console.log(e.target.value)
    //     const action = getInputChangeAction(e.target.value)
    //     store.dispatch(action)
    // }
    // handleStoreChange() {
    //     console.log('store changed')
    //     this.setState(store.getState())
    // }
    // handleBtnClick() {
    //     console.log(99)
    //     const action = getAddItemAction(this.props.inputValue)
    //     store.dispatch(action)
    // }
    // deleteItem(item) {
    //     console.log(item)
    //     const action = getDelItemAction(item)
    //     store.dispatch(action)
    // }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getInputChangeAction(e.target.value)
            dispatch(action)
        },
        handleBtnClick() {
            const action = getAddItemAction()
            dispatch(action)
        },
        deleteItem(item) {
            const action = getDelItemAction(item)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)