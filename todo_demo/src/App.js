import React, {Component, Fragment} from 'react';
import TodoItem from './components/TodoItem';
import ToggleHide from './ToggleHide'

import Test from './Test';
import axios from 'axios';

axios.defaults.baseURL = 'https://dianducs.mypep.cn';

class App extends Component {

  // 构造函数
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {        // 组件的状态
      inputValue: '',
      hobby: [],
    }
  }

  // 生命周期函数
    // 组件已经被挂载到页面之后，自动执行
    componentDidMount(){
      axios.get('/system/carousel_img.anys')
      .then((res) => {
        console.log(res.data.imgs);

        this.setState(()=>({
          hobby: [...res.data.imgs]
        }))


      })
      .catch((err) => {
        console.log('err');
      })
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

        <div>
          {
            this.state.hobby.map((item,index) => (
              <p key={item.title}><img src={item.url} title={item.title} width="200" /></p>
            ))
          }
        </div>

        <Test content={this.state.inputValue} />

        {/* ref */}
        <div ref={(div) => {this.div = div}}>ref获取元素</div>

        <ToggleHide />

      </Fragment>
    )
  }

}

export default App;
