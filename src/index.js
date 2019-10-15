import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import  Request from  './request.js'

//import ShowTime from './showTime.js'
//import Todolist from './ToDolist/ToDolist'
//组件交互
/* 
    父组件--->子组件：调用时在子组件上添加属性
    在子组件中通过props获取数据
*/
ReactDOM.render(<Request/>,document.getElementById('root'));

// 函数定义组件 (无生命周期函数)
//当只是渲染结构
/*function Todo(props){
    return (
        <div>
            <h1>todo</h1>
            <ul>
                {/* 循环渲染 }*//*
                {
                    props.list.map(function(item,index){
                        if(index%2==0){
                        return <li key={item}>{item}</li>}
                    })
                }
            </ul>
        </div>
    )
}
var item = [1,2,3,4,5];
ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));*/



// react元素创建后不可改变
// function tick(){
//     var e = <div>
//                 <p>当前时间</p>
//                 <p>当前时间</p>
//                 <h1>{new Date().toLocaleString()}</h1>;
//             </div>
//     ReactDOM.render(e,document.getElementById('root'));
// }
// tick();
// setInterval(tick,1000);







/*var ele = React.createElement(
    'div',
    {'id':'box'},
    'hello',
    React.createElement(
        'h1',
        {'id':'h'},
        'react'
    )
);
var obj = {
    type: 'div',
    props: {
        id: 'box',
        class: 'box',
        children: ['hello',{
            type: 'h1',
            props: {
                id: 'h',
                class: 'h',
                children: ['react']
            }
        }]
    }
}*/

//加载html文件、浏览器解析html生成DOM树
//link加载css文件、解析css规则、生成render tree 、浏览器渲染引擎渲染render tree

//页面回流(重排)：内容改变、大小改变、结构改变
//页面重绘(整体布局不动，改变页面背景颜色，字体颜色等样式)

//node.offsetLeft、node.offsetWidth等要慎使用
/*var root =document.getElementById('root');
var width=root.offsetWidth;
setInterval(function(){
    width+=1;
    root.style.width=width+'px';
},100)*/


//display width height font-size等会引起页面回流
//document.body.style.width="100px";
//一点一点的改，不如声明一个css的类
/*document.body.className="change";
.change{
    width:100px;
}*/


//
/*var str ='';
for(var i=0;i<1000;i++){
    str+='<li>'+i+'</li>'
}
document.body.innerHTML=str;//只是渲染一次，提高代码性能*/




/*function render(obj,container){
    var {type,props} = obj;
    //文档碎片
    var fragment= document.createDocumentFragment();
    var ele = document.createElement(type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item];
        }else if(item === 'children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i] === 'object'){
                    render(props[item][i],ele);
                }else{
                    var txt = document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }
    container.appendChild(ele);
}
render(obj,document.getElementById('root'));*/

// ReactDOM.render(ele,document.getElementById('root'));