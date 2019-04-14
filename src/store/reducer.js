import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM,INIT_LIST } from './actionTypes'

const defaultState = {
    inputValue: '123',
    list: []
}


// reducer 可以接收state, 但是不能修改state
export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DEL_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = newState.list.filter(item => item !== action.value)
        return newState
    }
    if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        return newState
    }
    return state
}