import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import StatusBarBackground from "../StatusBarBackground/StatusBarBackground";
import RoundedButton from "../RoundedButton/RoundedButton";
import { medmindBlue } from "../../constants/styles";

export default class CameraHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    hasMenu: PropTypes.bool,
    hasSettings: PropTypes.bool,
    fontSize: PropTypes.number
  };

  static defaultProps = {
    title: "MedMind",
    hasMenu: true,
    hasSettings: true,
    fontSize: 24
  };

  state = {};

  openHamburger = () => {
    this.props.navigation.openDrawer();
  };

  openSettings = () => {
      //to be filled
  };

  onSkipButtonPress = () => {
    const {navigate} = this.props.navigation;
    navigate('addDrugScreen');
  }
  render() {
    
    return (
      <View {...this.props} style={styles.container}>
        <StatusBarBackground />
        <View style={styles.appBar}>
          {this.props.title && (
            <Text style={styles.appBarTitle}>{this.props.title}</Text>
          )}
          <RoundedButton
            onPress={() => this.onSkipButtonPress()}
            name={"Skip"}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: medmindBlue,
    width: "100%"
  },
  appBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 10
  },
  hamburgerWrapper: {
    width: 32,
    height: 32,
    alignItems: "center",
    flex: 1
  },
  hamburgerIcon: {
    alignSelf: "flex-start"
  },
  settingsWrapper: {
    width: 32,
    height: 32,
    alignItems: "center",
    flex: 1
  },
  settingsIcon: {
    alignSelf: "flex-end"
  },
  appBarTitle: {
    color: "white",
    fontWeight: "500",
    fontFamily: "System",
    fontSize: 24,
    flex: 8,
    textAlign: "center",
    position: 'relative',
    left: 20
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: "gray",
    alignSelf: "center",
    width: 50,
    height: 37
  },
});
