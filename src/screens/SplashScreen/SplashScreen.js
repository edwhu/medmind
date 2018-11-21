import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image  } from "react-native";
import {NavigationActions} from "react-navigation";
import MedmindLogo from "../../assets/medmind-logo.png";
import { medmindBlue } from "../../constants/styles";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import styles from "./styles";

export default class SplashScreen extends Component {
  componentDidMount () {
    // TODO: Add some logic for logged in or not
    const navigateAction = NavigationActions.navigate({routeName:"drawerStack"});

    setTimeout(
      () => {
        this.props.navigation.dispatch(navigateAction)
      }, 2000
    );
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
