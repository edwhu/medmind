import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

export default class CheckboxInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
  };

  render() {
    const { onChange, value } = this.props;
    return <TouchableOpacity
      onPress={() => onChange(!value)}
    >
      <View style={ value ? styles.checked : styles.unchecked } />
    </TouchableOpacity>;
  }
}

 const styles = StyleSheet.create({
  checked: {
    height: 20,
    width: 20,
    backgroundColor: '#61C0BF',
  },
  unchecked: {
    height: 20,
    width: 20,
    backgroundColor: '#E0E0E0',
  },
});