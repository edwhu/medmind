import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { medmindBlue } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";

export default class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Ionicons name="ios-arrow-forward" style={styles.arrowButton} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arrowButton: {
    fontSize: 35,
    color: "#BDBDBD",
  },
  container: {
    position: "absolute",
    right: 32
  }
});
