import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


class SettingsButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.settingsWrapper}
      >
        <MaterialCommunityIcons
          style={styles.settingsIcon}
          name="dots-vertical"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    );   
  }
}

SettingsButton.propTypes = {
  onPress: PropTypes.func.isRequired
};
const styles = StyleSheet.create({
  settingsWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    flex: 1
  },
  settingsIcon: {
    alignSelf: 'flex-end'
  },
});


export default SettingsButton;