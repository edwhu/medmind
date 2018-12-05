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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProgressCircle from 'react-native-progress/CircleSnail';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

export default class CreateAccountScreen extends Component {
  // TODO: (howard) when you scroll up (swipe down), there is white space at the top. need to fix that
  static navigationOptions = {};

  static propTypes = {};

  static defaultProps = {
    passwordMessage: '*Passwords must match.',
  };

  state = {
    name: '',
    age: '',
    gender: '',
    username: '',
    password: '',
    confirmPassword: '',
    details: '',
    missingField: false,
    missingFieldMessage: '',
    submit: false, // for auto login it would be true, set to true to activiate progess circle
  };

  handleNameChange = (text) => {
    this.setState({
      name: text
    });
  }

  handleAgeChange = (text) => {
    this.setState({
      age: text
    });
  }

  handleGenderChange = (text) => {
    this.setState({
      gender: text
    });
  }

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

  handleConfirmPasswordChange = (text) => {
    this.setState({
      confirmPassword: text
    });
  }

  handleDetailsChange = (text) => {
    this.setState({
      details: text
    });
  }

  _validateEmail = (email) => {
    const reg = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    return reg.test(email) ? true : false;
  }

  handleSubmit = () => {
    console.log("Submit");
    if (!this.state.name) {
      this.setState({
        missingField: true,
        missingFieldMessage: '*Please enter your name'
      });
    } else if (!this.state.age) {
      this.setState({
        missingField: true,
        missingFieldMessage: '*Please enter your age'
      });
    } else if (!this.state.gender) {
      this.setState({
        missingField: true,
        missingFieldMessage: '*Please select your gender'
      });
    } else if (!this._validateEmail(this.state.username)) {
      this.setState({
        missingField: true,
        missingFieldMessage: '*Please enter a valid email'
      });
    }  else if (!this.state.password) {
      this.setState({
        missingField: true,
        missingFieldMessage: '*Please enter a password'
      });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        missingField: true,
        missingFieldMessage: '*Passwords do not match'
      });
    } else {
      //TODO: do something with the data. For now just have the "I accept" modals
      console.log("Valid form.");
      this.setState({
        missingField: false,
      });
    }
  }


  render() {
    return (
      <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
        <ScreenHeader {...this.props} hasMenu={false} hasSettings={false} hasBack={true} />
        <View style={styles.content}>
          <Text style={[styles.signUpText, { marginTop: 41 }]}>Sign Up</Text>
          <View style={[styles.inputWrapper, { marginTop: 42 }]} >
            <TextInput
              style={styles.textInput}
              placeholderTextColor={"#5B6571"}
              editable={true}
              onChangeText={(text) => this.handleNameChange(text)}
              placeholder={"Name"}
              value={this.state.name}
              autoCorrect={false}
              autoCapitalize={"words"}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={[styles.inputWrapper, { marginTop: 13 }]} >
            <TextInput
              style={styles.textInput}
              placeholderTextColor={"#5B6571"}
              editable={true}
              onChangeText={(text) => this.handleAgeChange(text)}
              placeholder={"Age"}
              value={this.state.age}
              autoCorrect={false}
              autoCapitalize={"none"}
              keyboardType={"numeric"}
              underlineColorAndroid="transparent"
            />
          </View>
          {/* TODO: make gender a picklist */}
          <View style={[styles.inputWrapper, { marginTop: 13 }]} >
            <TextInput
              style={styles.textInput}
              placeholderTextColor={"#5B6571"}
              editable={true}
              onChangeText={(text) => this.handleGenderChange(text)}
              placeholder={"Gender"}
              value={this.state.gender}
              autoCorrect={false}
              autoCapitalize={"words"}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={[styles.inputWrapper, { marginTop: 13 }]} >
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
            />
          </View>
          <View style={[styles.inputWrapper, { marginTop: 13 }]} >
            <PasswordInput
              style={styles.textInput}
              placeholderTextColor={"#5B6571"}
              editable={true}
              onChangeText={(text) => this.handleConfirmPasswordChange(text)}
              placeholder={"Confirm Password"}
              value={this.state.confirmPassword}
              autoCorrect={false}
              autoCapitalize={"none"}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={[styles.inputWrapper, { height: 72, marginTop: 13 }]} >
            <TextInput
              style={[styles.textInput, { height: 72, paddingTop: 13, paddingBottom: 13 }]}
              placeholderTextColor={"#5B6571"}
              editable={true}
              onChangeText={(text) => this.handleDetailsChange(text)}
              placeholder={"Enter diagnosis and treatment details"}
              value={this.state.details}
              autoCorrect={false}
              autoCapitalize={"words"}
              underlineColorAndroid="transparent"
              multiline={true}
            />
          </View>
          <View style={{ height: 31, width: "80%" }}>
            {this.state.missingField && <Text style={{ position: 'absolute', top: 5, color: "red" }}>{this.state.missingFieldMessage}</Text>}
          </View>
          <TouchableHighlight style={[styles.loginButtonWrapper, { }]} onPress={this.handleSubmit} underlayColor="rgba(101,192,190, 0.2)">
            <View>
              {!this.state.submit && <Text style={styles.loginButton} >Create Account</Text>}
              {
                this.state.submit &&
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
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%"
  },
  contentContainer: {
    alignItems: "center",
  },
  content: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 100
  },
  signUpText: {
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
    paddingLeft: 21,
    paddingRight: 21
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
  opacityWrapper: {
    // color: "rgba(91,101,113,0.5)",
    // alignSelf: "flex-end",
    // fontSize: 12
  },
  footerText: {
    color: "#5B6571",
    fontFamily: "System",
    fontSize: 12,
    alignSelf: "center",
    textAlign: "center"
  }
});
