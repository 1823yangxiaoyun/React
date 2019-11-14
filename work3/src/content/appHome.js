import React, { Component } from 'react'
import { NavBar,Carousel,} from 'antd-mobile';  

export default class appHome extends Component {
  state = {
    data: ['1', '2'],
    imgHeight:400,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3056486703,3663973836&fm=26&gp=0.jpg', "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2211261797,440204486&fm=26&gp=0.jpg"],
      });
    }, 100);
  }
    render() {
        return (
            <div>
                 <NavBar style={{backgroundColor:"#3fcccb",color:"white"}}>住吧家居</NavBar>
        
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          slideWidth="375px"
        >
          {this.state.data.map(val => (
              <img
                key={val}
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
          ))}
        </Carousel>
        <div style={{height:"130px",width:"100%",backgroundColor:"#eeeeee"}}>
          <div style={{height:"76%",width:"100px",backgroundColor:"rgba(0,0,0,0.1)",float:"left",marginLeft:"20px",marginTop:"15px",backgroundImage:"url(http://img4.imgtn.bdimg.com/it/u=204247921,2664477519&fm=15&gp=0.jpg)"}}>
            <p style={{fontSize:"14px",color:"white",float:"left",margin:"43px 22px 43px 22px"}}>热门品牌</p>
          </div>
          <div style={{height:"76%",width:"100px",backgroundColor:"red",float:"left",marginLeft:"20px",marginTop:"15px",backgroundImage:"url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573557986643&di=98ff5cbc3e7c0c7bcff87733b7ae757b&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn4%2Fjfs%2Ft1450%2F299%2F525332771%2F519363%2F14eab558%2F5590eedeN0f490dd4.jpg)"}}>
          <p style={{fontSize:"14px",color:"white",float:"left",margin:"43px 15px 43px 15px"}}>私人搭配师</p>
          </div>
          <div style={{height:"76%",width:"100px",backgroundColor:"red",float:"left",marginLeft:"20px",marginTop:"15px",backgroundImage:"url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1363291031,2176719475&fm=15&gp=0.jpg)"}}>
          <p style={{fontSize:"14px",color:"white",float:"left",margin:"43px 22px 43px 22px"}}>选购指南</p>
          </div>
        </div>
      <p>热门推荐</p>
      <img src={require("../img/re_02.jpg")} alt="" style={{height:"100%",width:"100%"}}></img>
          </div>
        )
    }
}
