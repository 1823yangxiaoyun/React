import React ,{Component} from 'react'
import {Link} from "react-router-dom"
export default class word extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.location.search;
        console.log(page)
        fetch('https://cnodejs.org/api/v1/topics'+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
       
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.location.search!==this.props.location.search){
        let page = this.props.location.search;
        fetch('https://cnodejs.org/api/v1/topics'+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
            })
        }
    }
    render() {
        var arr=[1,2,3,4,5,6,7,8,9,10];
        var last=this.props.location.search.split("&")[0];
        // console.log(last);
        return ( 
            <div >
                <ul  className ="list">
                  {
                    this.state.data.map((item)=>(
                        <li>
                         {<img  className="img1" src={item.author.avatar_url}/>}
                         <div className="num">
                         {<span className="count">{item.reply_count}</span>}
                         {<span className="count1">/{item.visit_count}</span>}
                         </div>
                         {<Link className="title"  to={`/topic/${item.id}`}><span className="butt">分享</span>{item.title}</Link>}
                         {<img  className="img2" src={item.author.avatar_url}/>}
                         {<span className="count2">三天前</span>}
                         {/* {console.log(item)} */}
                        </li>
                    ))
                    
                  }
                </ul>
                <div className="list1">
                    {
                    arr.map((item)=>(
                        <li><Link to={`${last}&page=${item}`}>{item}</Link></li>))
                    }
                </div>
            </div>
        )
    }
}
