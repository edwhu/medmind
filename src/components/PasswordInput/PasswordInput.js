import React, { Component } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
// import { VisibilityOn, VisibilityOff } from '../../../assets';

export default class PasswordInput extends Component {
  static defaultProps = {
    labelName: 'Password',
    // iconSize: 20,
    // iconColor: 'white',
  };

  state = {
    visible: false
  };

  changePasswordVisible = () => {
    if (this.state.visible) {
      this.setState({
        visible: false
      });
    } else {
      this.setState({
        visible: true
      });
    }
  }

  render() {
    return (
      <View style={styles.passwordView}>
        <TextInput 
          {...this.props} 
          secureTextEntry={!this.state.visible}
          textContentType="password"
        />
        {/* <TouchableOpacity style={styles.visibleIcon} onPress={this.changePasswordVisible}>
          <Image source={this.state.visible ? VisibilityOn : VisibilityOff} style={[styles.eyeIcon, {tintColor: this.props.iconColor, width: this.props.iconSize}]} resizeMode="contain"/>
        </TouchableOpacity> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  passwordView: {
    flex: 1,
    width: '100%',
    flexDirection : 'row',
    alignItems: 'center',
    position: 'relative'
    // justifyContent: 'space-evenly'
  },
  visibleIcon: {
    // marginRight: 100
    position: 'absolute',
    height: '100%',
    right: 5,
    justifyContent: 'center'
  },
  eyeIcon: {
    opacity: 0.4
  }
});