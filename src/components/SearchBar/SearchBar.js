import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image
} from "react-native";
import LogoWhite from "../../assets/logo-white.png";

const SearchBar = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.container}>

    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container :{
    width: "90%",
    height: 40,
    marginTop:15,
    marginBottom:20,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0 , height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  }
});

export default SearchBar;
