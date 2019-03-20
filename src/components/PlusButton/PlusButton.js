import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import PropTypes from "prop-types";
import { medmindBlue } from "../../constants/styles";

export default class PlusButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View>
        <TouchableOpacity
            style={styles.plusButton}
            onPress={this.props.onPress}
          >
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  plusButton: {
    backgroundColor: medmindBlue,
    width: 74,
    height: 74,
    borderRadius: 37,
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 24,
    right: 30
  },
  plus: {
    color:'white',
    fontSize: 55,
    marginBottom: 6,
    fontWeight: "200",
    color: "white",
    fontSize: 55,
    marginBottom: 6,
    fontWeight: "200"
  },
});

