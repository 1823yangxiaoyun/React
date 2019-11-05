import React, { Component } from 'react'
import {Link,Route} from "react-router-dom"
import Word from "../content/word"
export default class Home extends Component {
    render() {
 var url = this.props.match.url;
//  console.log(url);
        return (
            <div>
              <div className="all">
              <Link  to="/?tab=all">全部</Link>
              <Link  to="/?tab=good">精华</Link>
              <Link  to="/?tab=share">分享</Link>
              <Link  to="/?tab=ask" >问答</Link>
              <Link  to="/?tab=job">招聘</Link>
              </div>
              <div className="word">
                 <Route path={`${url}`} component={Word}/>

              </div>
            </div>
        )
    }
}