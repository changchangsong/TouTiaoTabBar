
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  InteractionManager,
  StatusBar,
  Platform,
} from 'react-native';


import ScrollableTabView,{ ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { SearchBar, Button, WhiteSpace, WingBlank,InputItem } from 'antd-mobile';
import NewsListView from './news/NewsListView.js';
import Navigator from "./Navigator/Navigator.js";
import Modal from "./Modal/Modal.js";

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    InteractionManager.runAfterInteractions(()=>{
      console.log('InteractionManager....MyMessage');
    });
  }

  render(){
    const{navigator}=this.props;
      console.log('InteractionManager....render');
    return(
      <View style={styles.container}>
        <View style={{backgroundColor: '#EFEFF4'}}>
          <View style={{width: 40}}>
            <Text style={styles.topSerach}>&#xe6ad;</Text>
            {/* <Image
              style={{width: 40,height: 40}}
              source={require("../images/touxiang.jpg")}/> */}
          </View>
          <View style={{marginLeft: 40,marginTop: -37}}>
            <SearchBar
              cancelText='搜索'
              placeholder="卡丁车漂移 | 男生护理 | 火山小视频"
              showCancelButton="true"
              onCancel={value => console.log("onCancel",this.state.value)}
              onChange={value =>{this.state.value = value;console.log(value)}}
            />
          </View>

        </View>

          <StatusBar
           backgroundColor='#1a191f'
           barStyle='light-content'
           animated={true}
           hidden={false}
          />
          {Platform.OS=='ios'?<View style={{height:15,backgroundColor:'#ce3d3a'}}/>:null}
          <ScrollableTabView
          initialPage={2}
          scrollWithoutAnimation={true}
          renderTabBar={()=><ScrollableTabBar
                        underlineColor='#FFFFFF'
                        activeTextColor='#ce3d3a'
                        inactiveTextColor='#272727'
                        underlineHeight={0}
                        textStyle={{ fontSize: 15 }}
                        tabStyle={{ paddingBottom: 0 }}
                        backgroundColor='#FFFFFF'
                        tabStyle={{paddingLeft:12,paddingRight:12}}
                       />}
          >
         <View tabLabel='列表显示' style={styles.itemLayout}><NewsListView/></View>
         <View tabLabel='跳转'style={styles.itemLayout}><Navigator/></View>
         <View tabLabel='弹层' style={styles.itemLayout}><Modal/></View>
         <View tabLabel='视频'  style={styles.itemLayout}><Text >视频板块</Text></View>
         <View tabLabel='上海'  style={styles.itemLayout}><Text >上海板块</Text></View>
         <View tabLabel='社会'  style={styles.itemLayout}><Text >社会板块</Text></View>
         <View tabLabel='图片'  style={styles.itemLayout}><Text >图片板块</Text></View>
         <View tabLabel='娱乐'  style={styles.itemLayout}><Text >娱乐板块</Text></View>
         <View tabLabel='科技'  style={styles.itemLayout}><Text >科技板块</Text></View>
         <View tabLabel='汽车'  style={styles.itemLayout}><Text >汽车板块</Text></View>
         </ScrollableTabView>
     </View>
    );
  }
}

const styles=StyleSheet.create({
  topSerach:{
    marginTop: 7,
    marginLeft: 7,
    color: '#4CA8EC',
    fontFamily:'iconfont',
    fontSize:30
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  itemLayout:{
    flex:1,
    // alignItems:'center',
    // justifyContent:'center'
  }
});
