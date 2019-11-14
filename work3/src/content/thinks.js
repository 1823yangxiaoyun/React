import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Tabs } from 'antd-mobile';
const tabs = [
  { title: '推荐', sub: '1' },
  { title: '冬季', sub: '2' },
  { title: '宜家', sub: '3' },
  { title: '小清新', sub: '4' },
  { title: '小户型', sub: '5' },
  { title: '个性色彩', sub: '6' },
];
export default class appHome extends Component {
    render() {
     
        return (
            <div>
                 <NavBar
                 style={{backgroundColor:"#3fcccb",color:"white"}}
                 rightContent={[<Icon key="0" type="search" style={{ color:"white",marginRight: '16px' }} />,]}>
                 灵感</NavBar>
            <Tabs tabs={tabs}
            initialPage={0}
            tabBarUnderlineStyle={{border:"1px solid #3fcccb"}}
            tabBarActiveTextColor="#3fcccb"
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div style={{  alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor: '#eeeeee' }}>
             <img src={ require("../img/cun_03.jpg" )}  className="tu" alt=""></img>
             <img src={ require("../img/er_03.jpg" )}  className="tu"  alt=""></img>
             <img src={ require("../img/fan_10.jpg" )}  className="tu" alt=""></img>
             <img src={ require("../img/jiao_12.jpg" )}   className="tu" alt=""></img>
             <img src={ require("../img/fan_10.jpg" )}  className="tu" alt=""></img>
             <img src={ require("../img/jiao_12.jpg" )}   className="tu" alt=""></img>
            </div>
            <div style={{  alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor: '#eeeeee' }}>
            <img src= "http://img0.imgtn.bdimg.com/it/u=3584529867,4272964777&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "http://img1.imgtn.bdimg.com/it/u=462000092,4040674041&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "http://img2.imgtn.bdimg.com/it/u=2981451621,3025777329&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "http://img1.imgtn.bdimg.com/it/u=462000092,4040674041&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "http://img0.imgtn.bdimg.com/it/u=3584529867,4272964777&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "http://img1.imgtn.bdimg.com/it/u=462000092,4040674041&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            </div>
            <div style={{  alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor: '#eeeeee'}}>
            <img src= "  https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2562325301,2297691212&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "  https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2562325301,2297691212&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "  https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2562325301,2297691212&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "  https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2562325301,2297691212&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "  https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2562325301,2297691212&fm=26&gp=0.jpg"  className="tu" alt=""></img>
            <img src= "  https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2562325301,2297691212&fm=26&gp=0.jpg"  className="tu" alt=""></img>
          
            </div>
            <div style={{ alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor: '#eeeeee' }}>
             <img src  ="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3270397248,1138897030&fm=26&gp=0.jpg"className="tu" alt=""></img>
             <img src  ="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3270397248,1138897030&fm=26&gp=0.jpg"className="tu" alt=""></img>
             <img src  ="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3270397248,1138897030&fm=26&gp=0.jpg"className="tu" alt=""></img>
             <img src  ="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3270397248,1138897030&fm=26&gp=0.jpg"className="tu" alt=""></img>
             <img src  ="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3270397248,1138897030&fm=26&gp=0.jpg"className="tu" alt=""></img>
             <img src  ="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3270397248,1138897030&fm=26&gp=0.jpg"className="tu" alt=""></img>

            </div>
            <div style={{  alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor:'#eeeeee' }}>
             <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3329405154,2976724736&fm=15&gp=0.jpg"className="tu" alt=""></img>
             <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3329405154,2976724736&fm=15&gp=0.jpg"className="tu" alt=""></img>
             <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3329405154,2976724736&fm=15&gp=0.jpg"className="tu" alt=""></img>
             <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3329405154,2976724736&fm=15&gp=0.jpg"className="tu" alt=""></img>
             <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3329405154,2976724736&fm=15&gp=0.jpg"className="tu" alt=""></img>
             <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3329405154,2976724736&fm=15&gp=0.jpg"className="tu" alt=""></img>
            </div>
            <div style={{  alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor: '#eeeeee' }}>
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4071231217,371838398&fm=26&gp=0.jpg"className="tu" alt=""></img>
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4071231217,371838398&fm=26&gp=0.jpg"className="tu" alt=""></img>
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4071231217,371838398&fm=26&gp=0.jpg"className="tu" alt=""></img>
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4071231217,371838398&fm=26&gp=0.jpg"className="tu" alt=""></img>
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4071231217,371838398&fm=26&gp=0.jpg"className="tu" alt=""></img>
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4071231217,371838398&fm=26&gp=0.jpg"className="tu" alt=""></img>
            </div>
          </Tabs>
            </div>
        )
    }
}