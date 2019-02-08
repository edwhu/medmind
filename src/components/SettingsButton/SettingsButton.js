import React, { Component } from "react";
import {NavigationActions} from "react-navigation";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import StatusBarBackground from "../StatusBarBackground/StatusBarBackground";
import { medmindBlue } from "../../constants/styles";



class SettingsButton extends Component {
    render() {
        return (
        <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.settingsWrapper}
        >
            <MaterialCommunityIcons
                style={styles.settingsIcon}
                name="dots-vertical"
                size={30}
                color="white"
            />
        </TouchableOpacity>
        )   
    }
}

SettingsButton.propTypes = {
    onPress: PropTypes.func.isRequired
  };
const styles = StyleSheet.create({
    settingsWrapper: {
        width: 32,
        height: 32,
        alignItems: "center",
        flex: 1
      },
      settingsIcon: {
        alignSelf: "flex-end"
      },
  });


export default SettingsButton;