import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';
export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo: JSON.parse(localStorage.getItem("key", this.state)) || []
        }
    }
    addItem = (msg)=>{
        this.setState({
            todo: [...this.state.todo,{item:msg,checked:false}]
        },()=>{
            localStorage.setItem("key",JSON.stringify(this.state.todo))
        })
    }
    delItem = (a)=>{
        let todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo:todo
        },()=>{
            localStorage.setItem("key",JSON.stringify(this.state.todo))
        })
    }
    checkboxChage = (key) => {
        let tempList = [...this.state.todo];
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            todo: tempList
        })
        localStorage.setItem("key",JSON.stringify(this.state.todo))
    }
   
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo} change={this.checkboxChage} num={this.numArr}/>
            </div>
        )
    }
}