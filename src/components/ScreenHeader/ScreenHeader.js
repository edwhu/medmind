import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import StatusBarBackground from "../StatusBarBackground/StatusBarBackground";
import { medmindBlue } from "../../constants/styles";

export default class ScreenHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    hasMenu: PropTypes.bool,
    hasSettings: PropTypes.bool
  };

  static defaultProps = {
    title: "Medmind",
    hasMenu: true,
    hasSettings: true
  };

  state = {};

  openHamburger = () => {
    console.log("open drawer");
    this.props.navigation.openDrawer();
  };

  openSettings = () => {
    console.log("open settings");
  };

  render() {
    return (
      <View {...this.props} style={styles.container}>
        <StatusBarBackground />
        <View style={styles.appBar}>
          {this.props.hasMenu && (
            <TouchableOpacity
              style={styles.hamburgerWrapper}
              onPress={this.openHamburger}
            >
              <Ionicons
                style={styles.hamburgerIcon}
                name="md-menu"
                size={32}
                color="white"
              />
            </TouchableOpacity>
          )}
          {this.props.title && (
            <Text style={styles.appBarTitle}>{this.props.title}</Text>
          )}
          {this.props.hasSettings && (
            <TouchableOpacity
              style={styles.settingsWrapper}
              onPress={this.openSettings}
            >
              <MaterialCommunityIcons
                style={styles.settingsIcon}
                name="dots-vertical"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          )}
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
    textAlign: "center"
  }
});
