import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import LogoWhite from '../../assets/logo-white.png';

const CancerBaseLoginButton = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.loginButton}>
      <Image source={LogoWhite} style={styles.loginButtonLogo} />
      <Text style={styles.loginButtonText}>Login with CancerBase</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  loginButton: {
    paddingLeft: 15,
    paddingRight: 20,
    paddingVertical: 10,
    backgroundColor: '#3B3E9D',
    flexDirection: 'row',
    borderRadius: 3,
  },
  loginButtonLogo: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    marginRight: 10,
    marginBottom: 0,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default CancerBaseLoginButton;
