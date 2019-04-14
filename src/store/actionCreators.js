import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_LIST} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
})

export const getAddItemAction = (value) => ({
    type: ADD_TODO_ITEM,
    value: value
})

export const getDelItemAction = (value) => ({
    type: DEL_TODO_ITEM,
    value: value
})

export const getInitListAction = (value) => ({
    type: INIT_LIST,
    value: value
})


export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list.json').then((res) => {
            console.log(res.data)
            const action = getInitListAction(res.data)
            dispatch(action)
        })
    }
}