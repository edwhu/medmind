import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


class DrawerIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.hamburgerWrapper}
      >
        <Ionicons
          style={styles.drawerIcon}
          name="md-menu"
          size={32}
          color="white"
        />
      </TouchableOpacity>
    );
  }
}

DrawerIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
  hamburgerWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    flex: 1,
    margin: 15,
  },
  drawerIcon: {
    alignSelf: 'flex-start',
  },
});


export default DrawerIcon;
