import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class AcceptButton extends Component {

  render() {
    return (
      <TouchableOpacity 
        style={styles.button}
        onPress={this.props.onPress}>
        <Text style={styles.word}>I Accept</Text>
      </TouchableOpacity> 
    );
  }
}