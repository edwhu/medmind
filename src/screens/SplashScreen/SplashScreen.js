import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image, AsyncStorage } from "react-native";
import MedmindLogo from "../../assets/medmind-logo.png";
import DayIcon from "../../assets/00-Day.png";
import { medmindBlue } from "../../constants/styles";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import styles from "./styles";

export default class SplashScreen extends Component {
  static navigationOptions = {
    drawerLabel: "splashScreen",
    drawerIcon: () => <Image source={DayIcon} style={styles.imageStyle} />
  };

  constructor(){
    super();
    this.state = {firstLaunch: null};
  }
  componentDidMount(){
    AsyncStorage.getItem("alreadyLaunched").then(value => {
        if(value == null){
            console.log("value was null");
             AsyncStorage.setItem('alreadyLaunched', true); // No need to wait for `setItem` to finish, although you might want to handle errors
             this.setState({firstLaunch: true});
             this.props.navigation.navigate("termsAndConditionsScreen");
        }
        else{
            console.log("value was not null");
             this.setState({firstLaunch: false});
             this.props.navigation.navigate("dayViewScreen");
        }}) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
}

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={MedmindLogo}
          style={styles.logo}
          alignSelf="center"
          resizeMode="contain"
        />
        <Text style={styles.text}>MEDMIND</Text>
      </View>
    );
  }
}
