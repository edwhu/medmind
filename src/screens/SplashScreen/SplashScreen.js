import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import MedmindLogo from '../../assets/medmind-logo.png';
import DayIcon from '../../assets/00-Day.png';
import styles from './styles';

export default class SplashScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'splashScreen',
    drawerIcon: () => <Image source={DayIcon} style={styles.imageStyle} />
  };

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
