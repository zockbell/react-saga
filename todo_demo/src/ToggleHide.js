import React, {Component, Fragment} from 'react';
import './style.css';
import { CSSTransition } from 'react-transition-group';

class ToggleHide extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    render(){
        return (
            <Fragment>
                <div 
                    className={this.state.show ? 'show' : 'hide'} 
                    style={{borderTop: '1px solid #ddd', marginTop: '20px', padding: '10px', background: '#000', color: '#fff'}}
                >
                    111
                </div>
                
                <CSSTransition>
                    <div>CSSTransition</div>
                </CSSTransition>
                
                <button onClick={this.handleToggle}>点击切换</button>
            </Fragment>
        )
    }

    handleToggle(){
        this.setState({
            show: this.state.show ? false : true
        })        
    }

}

export default ToggleHide;