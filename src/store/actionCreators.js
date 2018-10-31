import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, MODEL_VISIBLE, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    value: index
})

export const getModelVisible = () => ({
    type: MODEL_VISIBLE,
    value: false
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    value: data
})

export const getInitList = () => ({
    type: GET_INIT_LIST
})


