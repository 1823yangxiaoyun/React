import React, { Component } from 'react'
export default class Todoinput extends Component {
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    render() {
        return (
            <div>
                <label style={{fontSize:20 }} htmlFor="inp">输入：</label>
                <input id="inp" name="n1"  onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}