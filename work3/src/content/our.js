import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class Our extends Component {
    render() {
        return (
            <div>
                 <NavBar
                 style={{backgroundColor:"#3fcccb",color:"white"}}
                 rightContent={[<div className="iconfont icon-shezhi" key="0" style={{ color:"white",marginRight: '16px' }} />,]}>
                 我的</NavBar>
                 <img src={require("../img/our_02.jpg")} alt="" style={{height:"100%",width:"100%"}}></img>
            </div>
        )
    }
}