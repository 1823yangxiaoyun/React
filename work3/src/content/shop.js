import React, { Component } from 'react'
import { NavBar, Grid ,Carousel } from 'antd-mobile';
const data = [
  {
    icon: require("../img/zuo_03.jpg") ,
    text: `桌子`,
  },
  {
    icon: require("../img/chuang_03.jpg"),
    text: `床`,
  },
  {
    icon: require("../img/yi_03.jpg"),
    text: `椅`,
  },
  {
    icon: require("../img/ji_07.jpg"),
    text: `几`,
  },
  {
    icon: require("../img/gui_09.jpg"),
    text: `柜`,
  },
  {
    icon: require("../img/shu_16.jpg"),
    text: `床`,
  },
  {
    icon: require("../img/sha_18.jpg"),
    text: `沙发`,
  },
  {
    icon: require("../img/jia_20.jpg"),
    text: `家居饰品`,
  },
  {
    icon: require("../img/hu_22.jpg"),
    text: `户外家具`,
  },
  {
    icon: require("../img/quan_23.jpg"),
    text: `全部分类`,
  },

]
  const GridExample = () => (
     <Grid data={data}
      columnNum={5}
      hasLine="false"
      renderItem={dataItem => (
        <div>
          <img src={dataItem.icon} style={{ width: '43px', height: '43px' }} alt="" />
          <div >
          {dataItem.text} 
          </div>
        </div>
      )}
    />
  );
export default class shop extends Component {
  state = {
    data: ['1', '2'],
    imgHeight:400,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2807966831,3525807225&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3056486703,3663973836&fm=26&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2436370049,3779757734&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1907794928,1274068992&fm=26&gp=0.jpg" ],
      });
    }, 100);
  }
    render() {
        return (
         
            <div style={{height:"620px"}}>
              
                <NavBar
                 style={{backgroundColor:"#3fcccb",color:"white"}}
                 rightContent={[<div className="iconfont icon-gouwuche" key="0" style={{ color:"white",marginRight: '16px' }} />,]}>
                 商城</NavBar>
                 <div style={{backgroundColor:"#eeeeee",width:"100%",height:"5%",position:"absolute",zIndex:"10000",opacity:0.6}}>
                 <input type="text" style={{width:"70%",height:"95%",borderRadius:"40px",marginLeft:"15%",opacity:1}} placeholder="搜索">
                 </input>
                 </div>
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
                 <GridExample  />
                 <div style={{width:"100%",height:"33%",backgroundColor:"#eeeeee"}}>
                   <div  style={{width:"50%",float:"left",marginTop:"4%"}}>
                     <img src={require("../img/bei_07.jpg")} alt=""  style={{width:"90%",height:"28%",backgroundColor:"#eeeeee",float:"left"}}></img>
                     <p  style={{float:"left"}}>Top Art Stdio 欧式风格...<br/>￥39.95</p>
                   </div>
                   <div style={{float:"left",width:"50%",marginTop:"4%"}}>
                     <img src={require("../img/hei_09.jpg")} alt=""  style={{width:"90%",height:"28%",backgroundColor:"#eeeeee",float:"left"}}></img>
                     <p  style={{float:"left"}}>顺顺工艺塑料外壳欧式风格塑料外壳黑...<br/>￥83.99</p>
                   </div>
                 </div>
            </div>
        )
    }
}
