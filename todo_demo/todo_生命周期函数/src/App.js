import React, {Component, Fragment} from 'react';
import TodoItem from './components/TodoItem';
import Test from './Test';
import axios from 'axios';

axios.defaults.baseURL = 'https://dianducs.mypep.cn'; 

class App extends Component {

  // 构造函数
  constructor(props){
    console.log('constructor');

    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {        // 组件的状态
      inputValue: '',
      hobby: []
    }
  }

  // 生命周期函数
    // 组件已经被挂载到页面之后，自动执行
    componentDidMount(){
      console.log('componentDidMount');
      axios.get('/system/carousel_img.anys')
      .then((res) => {
        console.log(res.data.imgs);

        this.setState(()=>{
          return {
            hobby: res.data.imgs
          }
        })


      })
      .catch((err) => {
        console.log('err');
      })
    }

    // 组件被更新之前，会被自动执行
    shouldComponentUpdate(){
      console.log('shouldComponentUpdate');
      return true;
    }
    
    componentWillUpdate(){
      console.log('componentWillUpdate');
    }

    componentDidUpdate(){
      console.log('componentDidUpdate');
    }

    // 在组件即将被挂载到页面的时刻自动执行
    componentWillMount(){
      console.log('componentWillMount');
    }

    // 当组件将会被从页面中移除时，自动执行
    componentWillUnmount(){
      console.log('parent componentWillUnmount');
    }

  // 事件
  handleChange(e){
    // this.state.inputValue = e.target.value;  // react中不能直接改变state里的数据，必须通过setState
    this.setState({
      inputValue: e.target.value
    })  
  }

  handleSubmit(){
    // console.log(this.div.innerHTML);

    // console.log(this.ul.querySelectorAll('li').length);   //这里的DOM获取并不及时，因为setState是异步函数，所以此句不会立即执行，而正确的写法应该是第42行

    if(!this.state.inputValue){
      alert('请输入内容');
      return;
    }
    this.setState({
      hobby: [...this.state.hobby, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length);
    })    
  }

  handleDelete(index){
    const hobby = [...this.state.hobby];
    hobby.splice(index,1);
    this.setState({
      hobby
    })
  }

  getTodoItem() {
    return this.state.hobby.map((item,index) => {
      return (
        <TodoItem
          key={index} 
          content={item.title}
          index={index} 
          deleteEvent={this.handleDelete.bind(this)}
        />
      )
    })
  }

  // 渲染
  render(){
    console.log('render');
    return (
      <Fragment>
        <div>
          <label htmlFor="inputKey">输入内容</label>
          <input id="inputKey" value={this.state.inputValue} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {this.getTodoItem()}
        </ul>

        <Test content={this.state.inputValue} />

        {/* ref */}
        <div ref={(div) => {this.div = div}}>ref获取元素</div>

      </Fragment>
    )
  }

}

export default App;
