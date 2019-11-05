import React, { Component } from 'react'
export default class word0 extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        var url = this.props.match.url;
        console.log(url);
        fetch('https://cnodejs.org/api/v1'+url)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data.content});
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.location.search!==this.props.location.search){
        var url = this.props.match.url;
        fetch('https://cnodejs.org/api/v1'+url)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
            })
        }
    }
    render() {
        return (
            <div>
            <div style={{backgroundColor:"#fff"}} dangerouslySetInnerHTML={{__html:this.state.data}}></div>
            </div>
        )
    }
}
