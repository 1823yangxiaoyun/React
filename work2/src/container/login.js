import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class login extends Component {
    render() {
        return (
         
            <div style={{height:"300px",width:"900px",backgroundColor:"#fff"}}>
                 <p style={{backgroundColor:"#f6f6f6", fontSize:"15px",height:"20px",padding:"8px"}}>登录</p>
                <div className="yong"><p>用户名: </p><input type="text" style={{height:"30px",width:"284px"}}/></div>
               <div className="yong"> <p>密码:</p><input type="text"  style={{height:"30px",width:"284px"}}/></div>    
               <Link style={{backgroundColor:"#5BC0DE",padding:"10px 25px 10px 25px",color:"white",textDecoration:"none",margin:"0 0 0 360px"}} to="/" >登录</Link> 
            </div>
        )
    }
}
