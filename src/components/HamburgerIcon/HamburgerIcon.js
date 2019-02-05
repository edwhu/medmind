import React, { Component } from "react";
import {NavigationActions} from "react-navigation";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import StatusBarBackground from "../StatusBarBackground/StatusBarBackground";
import { medmindBlue } from "../../constants/styles";



class HamburgerIcon extends Component {
    render() {
        return (
        <TouchableOpacity
            onPress={this.props.onPress}
            style={styles.hamburgerWrapper}
        >
            <Ionicons
                style={styles.hamburgerIcon}
                name="md-menu"
                size={32}
                color="white"
            />
        </TouchableOpacity>
        )   
    }
}

HamburgerIcon.propTypes = {
    onPress: PropTypes.func.isRequired
  };
const styles = StyleSheet.create({
    // hamburgerWrapper: {
    //   width: 32,
    //   height: 32,
    //   alignItems: "center",
    //   flex: 1
    // },
    hamburgerIcon: {
      alignSelf: "flex-start"
    },
  });


export default HamburgerIcon;