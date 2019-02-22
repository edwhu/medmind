import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableHighlight, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { medmindBlue } from '../../constants/styles';

export default class RoundedButton extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  };

  static defaultProps = {};

  state = {};

  render() {
    return (
      <TouchableHighlight
        style={[styles.loginButton, this.props.buttonStyle]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.loginButtonText, this.props.textStyle]}>
          {this.props.name}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: medmindBlue,
    borderRadius: 8,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
