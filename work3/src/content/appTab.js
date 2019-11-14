import { TabBar } from 'antd-mobile';
import React from "react"
import AppHome from './appHome';
import Think from "./thinks"
import Our from "./our"
import Shop from "./shop"
import '../index.css';
export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        //   hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            //图标
            icon={ <div className="iconfont icon-1"/>}
            selectedIcon={<div className="iconfont icon-1"/>}
            selected={this.state.selectedTab === 'blueTab'}

            // badge={1}  数字
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
              <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={ <div className="iconfont icon-linggan"/>}
            selectedIcon={<div className="iconfont icon-linggan"/>}
            title="灵感"
            key="thinks"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            // data-seed="logId1"
          >
          <Think/>
          </TabBar.Item>
          <TabBar.Item
            icon={ <div className="iconfont icon-store_icon"/>}
            selectedIcon={<div className="iconfont icon-store_icon"/>}
            title="商城"
            key="shop"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
           <Shop/>
          </TabBar.Item>
          <TabBar.Item
            icon={ <div className="iconfont icon-wode"/>}
            selectedIcon={<div className="iconfont icon-wode"/>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
           <Our/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
