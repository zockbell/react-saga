import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
	}
	
	shouldComponentUpdate(nextProps, nextState){		
		if(nextProps.content !== this.props.content){
			return true;
		}else{
			return false;
		}
	}

    render() {
        return(
            <li onClick={this.handleClick} style={{background: '#eee', marginTop: '10px', padding: '5px 10px', cursor: 'pointer'}}>
                {this.props.content}
            </li>
        )
    }

    handleClick(){
        // alert(this.props.index);
        this.props.deleteEvent(this.props.index);
	}
	
	// 生命周期函数
		// 当一个组件从父组件接受参数，只要父组件的render函数被重新执行，子组件的这个生命周期函数就会被执行		
	componentWillReceiveProps(){
		console.log('child componentWillReceiveProps');
	}

	// 当这个组件即将被从页面中移除的时候，会被自行执行
	componentWillUnmount(){
	console.log('child componentWillUnmount');
	}
}

export default TodoItem;