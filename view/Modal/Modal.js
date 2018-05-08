import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Modal,
    Button,
} from 'react-native';

export default class ModalDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        visible: false,//是否显示
        transparent: true,//背景是透明或者不透明
    };
  }


    render() {
        return (
            <View style={{flex:1}}>
                <Button title='显示Modal' onPress={()=>{this.setState({visible:true})}}/>
                <Modal
                    onRequestClose={() => {}}
                    visible={this.state.visible}
                    transparent={this.state.transparent}>
                    <View
                        style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
                        <View style={{height:200,width:275,backgroundColor:'white'}}>
                            <Button title='关闭Modal' onPress={()=>{this.setState({visible:false})}}/>
                            <Button title={this.state.transparent?'不透明':'透明'} onPress={()=>{this.setState({transparent:!this.state.transparent})}}/>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
