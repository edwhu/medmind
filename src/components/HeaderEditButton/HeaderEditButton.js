import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class HeaderEditButton extends Component {
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
          <TouchableOpacity onPress={this.props.Press}>
            <Text style={styles.text}>{this.state.editMode ? 'Done' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>
      );
    }
} 