import LoginButton from "../../components/LoginButton/LoginButton";
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Alert,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import DayIcon from "../../assets/00-Day.png";
import MedmindLogo from "../../assets/medmind-logo.png";
import { medmindBlue } from "../../constants/styles";
import ProgressCircle from 'react-native-progress/CircleSnail';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class LoginScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Logout",
    drawerIcon: () => <Image source={DayIcon} style={styles.imageStyle} />
  };

  static propTypes = {};

  static defaultProps = {};

  state = {
    username: this.props.username || '',
    password: this.props.password || '',
    login: false, // for auto login it would be true, set to true to activiate progess circle
  };

  handleUsernameChange = (text) => {
    this.setState({
      username: text
    });
  }

  handlePasswordChange = (text) => {
    this.setState({
      password: text
    });
  }

  navigateForgotPassword = () => {
    console.log("Navigate to forgot password.");
    this.props.navigation.navigate("forgotPasswordScreen");
  }

  navigateCreateAccount = () => {
    console.log("Navigate to create account.");
    this.props.navigation.navigate("createAccountScreen");
  }

  handleLogin = () => {
    console.log("Handle login.");

    const username = this.state.username;
    const password = this.state.password;

    console.log(username, password);

    if (!this._validateEmail(username)) {
      Alert.alert("Login", "Sorry there was an issue with your email or password. Please try again.", [{ text: "OK" }], { cancelable: false });
      return;
    }

    this.setState({
      login: true
    });

    this.props.navigation.navigate("drawerStack");
  }

  _validateEmail = (email) => {
    const reg = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    return reg.test(email) ? true : false;
  }

  render() {
    return (
      // <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.scrollStyle}>
      <View style={styles.container}>
        <ScreenHeader {...this.props} hasMenu={false} hasSettings={false} />
        <View style={styles.contentContainer}>
          <Text style={styles.signInText}>Sign In</Text>
          <View style={[styles.inputWrapper, { marginTop: 42 }]} >
            <TextInput
              style={styles.textInput}
              placeholderTextColor={"#5B6571"}
              editable={true}
              onChangeText={(text) => this.handleUsernameChange(text)}
              placeholder={"Email"}
              value={this.state.username}
              autoCorrect={false}
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              underlineColorAndroid="transparent"
              textContentType="username"
            />
          </View>
          <View style={[styles.inputWrapper, { marginTop: 13 }]} >
            <PasswordInput
              style={styles.textInput}
              placeholderTextColor={"#5B6571"}
              editable={true}
              onChangeText={(text) => this.handlePasswordChange(text)}
              placeholder={"Password"}
              value={this.state.password}
              autoCorrect={false}
              autoCapitalize={"none"}
              underlineColorAndroid="transparent"
              textContentType="password"
            />
          </View>
          <TouchableHighlight style={[styles.loginButtonWrapper, { marginTop: 31 }]} onPress={this.handleLogin} underlayColor="rgba(101,192,190, 0.2)">
            <View>
              {!this.state.login && <Text style={styles.loginButton} >Sign In</Text>}
              {
                this.state.login &&
                <ProgressCircle
                  size={35}
                  indeterminate={true}
                  color={"rgba(121,212,210, 1)"}
                  strokeCap={"round"}
                />
              }
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.contentFooter} >
          <TouchableOpacity style={[styles.opacityWrapper, { marginRight: 12 }]} onPress={this.navigateForgotPassword} >
            <Text style={styles.footerText}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{ height: 26, paddingLeft: -1, borderRightWidth: 1, borderRightColor: "#C4C4C4" }}></View>
          <TouchableOpacity style={[styles.opacityWrapper, { marginLeft: 12 }]} onPress={this.navigateCreateAccount} >
            <Text style={styles.footerText}>Create an account</Text>
          </TouchableOpacity>
        </View>
      {/* </KeyboardAwareScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  // scrollStyle: {
  //   alignItems: "center",
  //   // justifyContent: "space-between",
  // },
  contentContainer: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 100
  },
  signInText: {
    fontFamily: "System",
    fontSize: 25,
    textAlign: "center",
    color: "#4F4F4F",
    letterSpacing: 1
  },
  inputWrapper: {
    width: "80%",
    height: 47,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E4E4E4",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    height: 47,
    width: "100%",
    fontFamily: "System",
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10
  },
  loginButtonWrapper: {
    width: "70%",
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(101,192,190,1)",
    borderRadius: 103
  },
  loginButton: {
    color: "white",
    fontFamily: "System",
    fontSize: 16
  },
  contentFooter: {
    height: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 38
  },
  opacityWrapper: {},
  footerText: {
    color: "#5B6571",
    fontFamily: "System",
    fontSize: 12,
    alignSelf: "center",
    textAlign: "center"
  },
  link: {
    textDecorationLine: "underline",
    color: "blue"
  },
  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: "15.2%"
  }
});
