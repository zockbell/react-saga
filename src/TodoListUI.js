import React, { Component } from 'react';
import { Input, Button, List, Alert } from 'antd';

class TodoListUI extends Component {
    render(){
        return (
            <div style={{paddingTop: '10px', paddingLeft: '10px'}}>
                <div>
                <Input 
                    value={this.props.inputValue}
                    placeholder="请输入内容" 
                    style={{width: '300px', marginRight: '10px'}} 
                    onChange={this.props.handleChange}
                    onKeyDown={this.props.onKeyDown}
                />
                <Button type="primary" onClick={this.props.handleSubmit}>提交</Button>
                </div>
                <List
                size="small"          
                style={{marginTop: '5px', width: '300px', cursor: 'pointer'}}
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleDelete(index)}}>{item}</List.Item>)}
                />
                <div>
                {
                    this.props.visible ? (
                    <Alert
                        message="内容不能为空"
                        type="error"
                        closable
                        afterClose={this.props.handleClose}
                    />
                    ) : null
                }
                </div>
            </div>
        )
    }
}

export default TodoListUI;