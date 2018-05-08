import React, { Component } from 'react';
import {
    View,
    Button,
    Modal,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
    ListView,
    Image} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";

import NewsListViewDetailContent from './NewsListViewDetailContent.js';

const NewsListViewDetailContents = {component: NewsListViewDetailContent};

export default class newsListViewDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    renderScene(route, navigator) {
          let Component = route.component;
          return (
              <Component {...route.params} navigator={navigator}/>
          );
      }

      renderNavBar() {
          var routeMapper = {
              LeftButton(route, navigator, index, navState) {//左边按钮
                  if (index > 0) {
                      return (
                          <TouchableOpacity
                              onPress={() => {}}//退栈
                              style={styles.button}>
                              <Image
                                  style={styles.thumbnail}
                                  source={{uri:'asset:/images/2.png'}}
                              />
                          </TouchableOpacity>
                      );
                  }
              },
              RightButton(route, navigator, index, navState) {//右边按钮
                return (
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.button}>
                        <Image
                            style={styles.thumbnail}
                            source={{uri:'asset:/images/2.png'}}
                        />
                    </TouchableOpacity>
                );
              },
              Title(route, navigator, index, navState) {//主标题
                  return (
                      <View style={styles.title}>
                          <Text style={styles.buttonText}>商品列表</Text>
                      </View>
                  );
              }
          };

          return (
              <Navigator.NavigationBar
                  style={styles.navigationBarStyle}
                  routeMapper={routeMapper}
              />
          );
      }

    render() {
        let self = this.props.self;
        let moveieItem = this.props.moveieItem;
        return (
            <Modal
                onRequestClose={() => {}}
                visible={self.state.visible}
                transparent={false}>
                    <View style={{flex:1,backgroundColor:'white'}}>
                    <Navigator
                        initialRoute={NewsListViewDetailContents}
                        renderScene={this.renderScene}
                        sceneStyle={{paddingTop: (Platform.OS === 'android' ? 66 : 74)}}
                        navigationBar={this.renderNavBar()}/>
                    </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    navigationBarStyle:{
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      shadowOffset: {
          width: 1,
          height: 0.5,
      },
      shadowColor: '#999999',
      shadowOpacity: 0.2,
    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFFFFF'
    },
    button: {
        flex: 1,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#999999',
        fontWeight: '800'
    },
    thumbnail: {
         width: 40,
         height: 40
     }
});
