import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { medmindBlue } from '../../constants/styles';

export default class FormField extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.form}>
        <View style={styles.container}>
          <Text>{this.props.header}</Text>
          <TextInput
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            placeholder={this.props.placeholder}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  form: {
    height: 40,
    borderColor: medmindBlue,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
});
