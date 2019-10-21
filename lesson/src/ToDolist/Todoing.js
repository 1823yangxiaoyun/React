import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Toding extends Component {
    render() {
        return (
            <div>
                <h1>正在进行{this.props.a}</h1>
                <ul className="list"> 
                {
                    this.props.todo.map((item,idx)=>
                        <li key={idx}>{item}----<button onClick={()=>this.props.delTodo(idx)}>删除</button></li>)
                }
                </ul>
            </div>
        )
    }
}
Todoing.PropTypes= {
    todo:PropTypes.array
}
