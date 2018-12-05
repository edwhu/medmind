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
import ProgressCircle from 'react-native-progress/CircleSnail';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';

export default class ForgotPasswordScreen extends Component {
  // TODO: (howard) Should probably not use margin on "Forgot Password" since screen sizes can change
  static navigationOptions = {};

  static propTypes = {};

  static defaultProps = {
    ifSent: 'An email has been sent to you with a temporary password. Please use this to log in then change your password in "Edit Account".'
  };

  state = {
    username: this.props.username || '',
    login: false,
    sent: true
  };

  handleUsernameChange = (text) => {
    this.setState({
      username: text
    });
  }

  handleForgotPassword = () => {
    const username = this.state.username;
    if (!this._validateEmail(username)) {
      Alert.alert("Forgot Password", "Sorry there was an issue with your email. Please try again.", [{ text: "OK" }], { cancelable: false });
      return;
    }

    this.setState({
      login: true,
      sent: false
    });

    // TODO: (howard) send an email?

    // Alert.alert("Forgot Password", "An email has been sent.", [{ text: "OK", onPress: () => this.props.navigation.goBack(null) }], { cancelable: false });
    success = true;

    if (success) {
      this.setState({
        sent: true,
        login: false
      });
    } else {
      Alert.alert("Forgot Password", "There was an issue sending an email. Please try again later.", [{ text: "OK" }], { cancelable: false });
      this.setState({
        login: false
      });
    }
  }



  _validateEmail = (email) => {
    const reg = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    return reg.test(email) ? true : false;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} hasMenu={false} hasSettings={false} hasBack={true} />
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Forgot Password?</Text>
          {!this.state.sent && 
            <View style={{ width: "100%", alignSelf: "center", alignItems: "center" }}>
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
                  textContentType="emailAddress"
                />
              </View>
              <TouchableHighlight style={[styles.loginButtonWrapper, { marginTop: 31 }]} onPress={this.handleForgotPassword} underlayColor="rgba(101,192,190, 0.2)">
                <View>
                  {!this.state.login && <Text style={styles.loginButton} >Submit</Text>}
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
          }
          {this.state.sent &&
            <View style={{ width: "100%", alignSelf: "center", alignItems: "center" }}>
              <Text style={styles.sentText}>{this.props.ifSent}</Text>
            </View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "space-between",
    // flexGrow: 1,
    height: "100%",
    width: "100%"
  },
  contentContainer: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    // justifyContent: "center",
    alignItems: "center",
    marginBottom: 100
  },
  text: {
    marginTop: 108,
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
    // borderColor: "rgba(228,228,228,1)",
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
  sentText: {
    color: "#5B6571",
    fontSize: 16,
    width: "60%",
    marginTop: 11,
    fontFamily: "System"
  }
});
