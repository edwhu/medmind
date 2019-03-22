import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class EditButton extends Component {
    constructor(props) {
      super(props);
    }
  
    state = {
        editMode: false
    }

    onEditPress = () => {
        this.setState({ editMode: !this.state.editMode });
    };
  
    render() {
      return (
        <View >
          <TouchableOpacity onPress={this.onEditPress}>
            <Text>{this.state.editMode ? 'Done' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }