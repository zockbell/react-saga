import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, MODEL_VISIBLE, INIT_LIST_ACTION } from './actionTypes';

const defaultState = {
    inputValue: '',
    list: [],
    visible: false
};

// reducer可以接收state,但是绝不可以修改state
export default ((state = defaultState, action) => {
    // console.log(state,action);
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        if(!newState.inputValue) {
            newState.visible = true;
            return newState;
        }
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        newState.visible = false;
        return newState;
    }
    if(action.type === MODEL_VISIBLE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.visible = action.value;
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);        
        return newState;
    }

    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value
        return newState;
    }

    return state;
})