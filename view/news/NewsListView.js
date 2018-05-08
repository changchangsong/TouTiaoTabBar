import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
} from 'react-native';


import NewsListViewDetail from './NewsListViewDetail.js';

//导入json数据
var movies = require('./NewsList.json');

export default class NewsList extends Component {
  constructor(props) {
    super(props);

    let dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    });

    this.state = {
      datas:dataSource.cloneWithRows(movies.data),
      visible: false,//是否显示
      transparent: true,//背景是透明或者不透明
      moveieItem:{},
    };
  }

  renderMovieList(movie){
    return (
      //触摸标签高亮显示
      <TouchableHighlight
        underlayColor ="rgba(34,26,38,0.1)"
        onPress={()=>{
            this.setState({
                visible:true,
                moveieItem:movie,
            })
        }}
        >
        <View style={styles.item}>
          <View style={styles.itemImage}>
              <Image
                style={styles.image}
                source={{uri:movie.url}}/>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{movie.title}</Text>
            <Text style={styles.itemMeta}>{movie.icon}</Text>
            <Text style={styles.itemScore}>{movie.score}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
          <ListView
            dataSource={this.state.datas}
            renderRow={
              movie => this.renderMovieList(movie)
            } />
            <NewsListViewDetail self={this} moveieItem={this.state.moveieItem}/>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  item:{
    flexDirection: 'row',//行显示
    borderBottomWidth: 1,//下边框
    borderColor: 'rgba(100,53,201,0.2)',//用rgba表示，最后一个参数是不透明度
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 4,
    flex: 1
  },
  itemContent:{
    flex: 1,
    marginLeft: 13,
    marginTop: 6,
  },
  itemHeader:{
    fontSize: 18,//字体大小
    fontFamily: 'Helvtica Neue',//字体类型
    fontWeight: '300',//字体粗细
    color: '#6435c9',//字体颜色
    marginBottom: 6
  },
  itemMeta:{
    fontSize: 13,
    marginBottom: 6,
    color: 'rgba(0,0,0,0.6)'
  },
  itemScore:{
    color: '#ff0000'
  },
  image:{
    width: 99,
    height: 136,
  },
  container:{
    backgroundColor: '#eae7ff',
    flex: 1,
  }
});
