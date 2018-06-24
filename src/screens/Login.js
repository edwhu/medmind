import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class Login extends Component {

  render() {
      return (
          <View style={styles.wrapper}>
              <Text>Hello World</Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  wrapper : {
  flex : 1,
  justifyContent: 'center',
  alignItems: 'center'
  }
});