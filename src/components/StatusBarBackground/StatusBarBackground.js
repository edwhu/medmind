"use strict";
import React, { Component } from "react";
import { Dimensions, View, Text, StyleSheet, Platform } from "react-native";

export default class StatusBarBackground extends Component {
  state = {
    platform: "ios",
    isIphoneX: false,
    isIphonePlus: false
  };

  componentWillMount() {
    const { height, width } = Dimensions.get("window");
    const aspectRatio = height / width;

    // check platform version
    if (Platform.OS === "ios") {
      if (height === 812 || width === 812) {
        // iphone X
        this.setState({
          isIphoneX: true
        });
      } else {
        // iphone or iphone plus
      }
    } else {
      // android
      // console.log('Android device');
    }

    // also check tablet vs phone, works for most android tablets/phones as well
    if (aspectRatio > 1.6) {
      // iPhone
      // console.log('Not an ipad');
    } else {
      // iPad
      // console.log('ipad');
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
              this.state.platform === "ios"
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
    width: "100%",
    zIndex: 5
  }
});
