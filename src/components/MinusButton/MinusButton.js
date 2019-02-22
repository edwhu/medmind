import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { medmindBlue } from '../../constants/styles';

export default class MinusButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.edit}>
        <TouchableOpacity style={styles.minusButton} onPress={this.props.onPress}>
          <Text style={styles.minus}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  minusButton: {
    backgroundColor: medmindBlue,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    bottom: 9,
  },
  edit: {
    marginLeft: 21,
  },
});
