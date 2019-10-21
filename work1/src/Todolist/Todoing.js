import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    numArr=(todo)=>{
        let i=0;
       (todo|| []).map((item)=>{
            if (!item.checked) {
                i++;
            }
        })
        return i;
    }
    numArr1=(todo)=>{
        let i=0;
        (todo|| []).map((item)=>{
            if (item.checked) {
                i++;
            }
        })
        return i;
    }

    render() {
        return (
            <div>
                <h4>正在进行[{this.numArr(this.props.todo)}]</h4>
                <ul className="list">
                    { 
                    (this.props.todo ||[]).map((item,idx)=>{
                        if (!item.checked) {
                            return(<li key={idx}><button onClick={()=>{this.props.change(idx)}}>+</button>---{item.item}----<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)}
                     })
                    }

                </ul>
                 <h4>已经完成[{this.numArr1(this.props.todo)}]</h4> 
                <ul className="donelist">
                { 
                    (this.props.todo || []).map((item,idx)=>{
                        if (item.checked) {
                            return(<li key={idx}><button onClick={()=>{this.props.change(idx)}}>+</button>---{item.item}----<button onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)} 
                     })
                    }
                </ul>
            </div>
        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array
}
