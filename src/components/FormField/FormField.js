import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import PropTypes from "prop-types";
import { medmindBlue } from "../../constants/styles";
import CheckboxInput from './CheckboxInput';

export default class FormField extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'checkbox']),
  };

  static defaultProps = {
    type: 'text',
  };

  constructor(props) {
    super(props);
  }

  render() {
    let content;

    switch(this.props.type) {
      case 'checkbox': {
        content = <CheckboxInput
          onChange={this.props.onChange}
          value={this.props.value}
        />;
        break;
      }

      case 'text':
      default: {
        content = <TextInput
          onChangeText={this.props.onChange}
          value={this.props.value}
          placeholder={this.props.placeholder}
        />;
      }
    }


    return (
      <View style={styles.form}>
        <View style={styles.container}>
          <Text>{this.props.header}</Text>
          { content }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  form: {
    height: 40,
    borderColor: medmindBlue,
    borderBottomWidth: 1,
    marginHorizontal: 20
  }
});
