import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getModelVisible, getInitList } from './store/actionCreators';
import TodoListUi from './TodoListUI';

// axios.defaults.baseURL = 'https://dianducs.mypep.cn';

class App extends Component {

  constructor(props){
    super(props);
    // console.log(store.getState());
    this.state = store.getState();

    this.handleChange = this.handleChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);

    store.subscribe(this.handleStoreChange);  //监听（订阅store的变化）    
  }

  render() {
    return (
      <TodoListUi 
        inputValue={this.state.inputValue}
        handleChange={this.handleChange}
        onKeyDown={this.handleKeydown.bind(this)}
        handleSubmit={this.handleSubmit}
        list = {this.state.list}
        visible = {this.state.visible}
        handleDelete = {this.handleDelete}
        handleClose = {this.handleClose}
      />
    );
  }

  // 输入框变化
  handleChange(e){
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  // 监听并更新最新的store
  handleStoreChange(){
    this.setState(store.getState());
  }

  // 提交
  handleSubmit(){
    const action = getAddItemAction();
    store.dispatch(action);
  }

  // 回车事件
  handleKeydown = (e) => {
    if(e.keyCode === 13){
      this.handleSubmit();
    }
  }

  // 删除
  handleDelete(index){    
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  // 模态提示框
  handleClose() {
    const action = getModelVisible();
    store.dispatch(action);
  }

  // ajax异步请求
  componentDidMount(){

    const action = getInitList();
    store.dispatch(action);
    // console.log(action);

  }

}

export default App;
