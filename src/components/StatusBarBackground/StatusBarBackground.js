import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Platform } from 'react-native';

export default class StatusBarBackground extends Component {
  state = {
    platform: 'ios',
    isIphoneX: false,
    isIphonePlus: false
  };

  constructor(props) {
    super(props);
    const { height, width } = Dimensions.get('window');
    if (Platform.OS === 'ios' && height === 812 && width === 812) {
      this.state = {
        platform: 'ios',
        isIphoneX: true,
        isIphonePlus: false,
      };
    } else {
      this.state = {
        platform: 'ios',
        isIphoneX: false,
        isIphonePlus: false,
      };
    } 
  }

  render() {
    return (
      <View
        style={[
          styles.statusBarBackground,
          this.props.style || {},
          {
            height:
              this.state.platform === 'ios'
                ? this.state.isIphoneX
                  ? 30
                  : 0
                : 0
          }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    width: '100%',
    zIndex: 5
  }
});
