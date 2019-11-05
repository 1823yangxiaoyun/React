import React, { Component } from 'react'

export default class API extends Component {
    render() {
        return (
            <div style={{height:"300px",width:"900px",backgroundColor:"#fff"}}>
            <p style={{backgroundColor:"#f6f6f6", fontSize:"15px",height:"20px",padding:"8px"}}>API</p>
            <h1>  主题</h1>
            <p>
          
get /topics 主题首页
接收 get 参数

page Number 页数
tab String 主题分类。目前有 ask share job good
limit Number 每一页的主题数量
mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
示例：/api/v1/topics
            </p>
            </div>
        )
    }
}
