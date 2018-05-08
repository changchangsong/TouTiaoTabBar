import React, { Component } from 'react';
import Splash from './ProductList';
import ProductDetail from './ProductDetail';

import {
  AppRegistry,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  StatusBar,
  ListView,
  Image,
  View
} from 'react-native';

import {Navigator} from "react-native-deprecated-custom-components";

const defaultRoute = {component: Splash};
const productDetail = {component: ProductDetail};

export default class navigator extends Component {
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
                            onPress={() => navigator.pop()}//退栈
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
                      onPress={() => navigator.push(productDetail)}
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
                        <Text style={styles.buttonText}>{!route.title ? '商品列表' : '商品详情'}</Text>
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
        return (
            <Navigator
                initialRoute={defaultRoute}
                renderScene={this.renderScene}
                sceneStyle={{paddingTop: (Platform.OS === 'android' ? 66 : 74)}}
                navigationBar={this.renderNavBar()}/>
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
