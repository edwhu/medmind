import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, View, Text, ScrollView, TouchableHighlight } from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";

import { medmindBlue } from "../../constants/styles";
import ProfilePicturePlaceholder from "../../assets/profile_picture_placeholder.png";
import styles from "./styles";

export default class CustomDrawer extends Component {
  render() {
    return (
      <View style = {styles.drawerBackground}>
        <ScrollView>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <View style={{alignItems: "center"}}>
              <TouchableHighlight style = {
                [styles.profilePicture, {borderColor: "#CDF0EF50", borderWidth: 3, overflow: "hidden"}]
                }>
                <Image
                  resizeMode="contain"
                  style = {styles.profilePicture}
                  source={ProfilePicturePlaceholder}
                />
              </TouchableHighlight>
              <Text style={styles.text}>Ed Hu</Text>
            </View>
            <DrawerItems {...this.props} />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}
