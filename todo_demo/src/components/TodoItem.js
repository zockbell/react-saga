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
	
}

export default TodoItem;