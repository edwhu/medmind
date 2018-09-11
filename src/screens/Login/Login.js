import LoginButton from "../../components/LoginButton/LoginButton";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image } from "react-native";
import MedmindLogo from "../../assets/medmind-logo.png";
import { medmindBlue } from "../../constants/styles";

export default class LoginScreen extends Component {
  static navigationOption = {
    drawerLabel: "Logout"
  };

  static propTypes = {};

  static defaultProps = {};

  state = {};

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  // callback for login success
  onLogin = () => {
    console.log("onLogin called");
    this.props.navigation.navigate("drawerStack");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.logo} source={MedmindLogo} />
        <View style={styles.button}>
          <LoginButton onPress={this.onLogin} />
        </View>
        <Text style={styles.text}>
          By logging in or creating an account, I acknowledge I agree to the
          <Text style={styles.link} onPress={() => {}}>
            Terms and Conditions
          </Text>{" "}
          and
          <Text style={styles.link} onPress={() => {}}>
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexGrow: 1,
    backgroundColor: medmindBlue
  },
  button: {
    width: "80%"
  },
  text: {
    textAlign: "center",
    color: "white"
  },
  logo: {
    width: 300,
    height: 300
  },
  link: {
    textDecorationLine: "underline",
    color: "blue"
  }
});
