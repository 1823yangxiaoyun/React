import React, { Component } from 'react'
import {HashRouter as Router,Route} from 'react-router-dom';
import Header from './components/header' 
import Home from './container/Home'
import API from './container/API'
import Start from './container/start'
import About from './container/about'
import Login from "./container/login"
import Word0 from "./content/word0"
export default class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <Header/>
                <div className="main">
                    <div className="content">
                        <Route path='/' exact component={Home}/>
                        <Route path='/api' component={API}/>
                        <Route path='/about' component={About}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/topic/:id' component={Word0}/>
                        
                    </div>
                    <div className="sider">
                        <div className="inner">
                            <p>CNode：Node.js专业中文社区</p>
                            <span style={{marginLeft:"10px"}}>通过 GitHub 登录</span>
                        </div>
                        <div className="ads">
                        <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""/>
                        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=""></img>
                        <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt=""></img>
                        </div>
                        <div className="ads1">
                            <p style={{backgroundColor:"#f6f6f6", fontSize:"13px",height:"30px",padding:"8px"}}>无人回复的话题</p>
                            <p style={{color:"#778087", fontSize:"14px" ,lineHeight:"30px",paddingLeft:"13px"}}>一种支持插件式开发的命令行行工具开发方式<br/>
                            请问缓存的内存模型是什莫嘞<br/>
                            Hackers周刊第十期<br/>
                            写了个测试中，控制函数日志打印的......
                            </p>
                        </div>
                        <div  style={{heigth:"370px",backgroundColor:"#fff",marginTop:"15px"}}>
                            <p style={{backgroundColor:"#f6f6f6", fontSize:"13px",height:"30px",padding:"8px"}}>友情社区</p>
                            <img style={{heigth:"49px",width:"150px",padding:"5px 0 0 10px"}} src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=""></img>
                            <img  style={{heigth:"49px",width:"150px",padding:"5px 0 0 10px"}} src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt=""></img>
                            <img  style={{heigth:"49px",width:"150px",padding:"5px 0 0 10px"}} src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt=""></img>
                            <img   style={{heigth:"49px",width:"150px",padding:"5px 0 0 10px"}} src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt=""></img>
    
                        </div>
                        <div style={{heigth:"370px",backgroundColor:"#fff",marginTop:"15px"}}>
                            <p style={{backgroundColor:"#f6f6f6", fontSize:"13px",height:"30px",padding:"8px"}}>客户端二维码</p>
                            <img style={{padding:"5px 0 0 30px"}} width="200" src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt=""></img>
                           
                        </div>
                    </div>
                  
                </div>
                <div className="last"> 
                 <div class="last1">
                    <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                    <p>服务器赞助商为<img src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9"  alt="" width="92px"/>，存储赞助商为<img src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" width="92px" alt=""/>，由<img src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" alt=""/>
  提供应用性能服务。<p>新手搭建 Node.js 服务器，推荐使用无需备案的</p></p>
                </div>
            </div>
            </div>
            </Router>
        )
    }
}
