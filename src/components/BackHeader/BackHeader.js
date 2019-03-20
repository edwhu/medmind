import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import StatusBarBackground from '../StatusBarBackground/StatusBarBackground';
import RoundedButton from '../RoundedButton/RoundedButton';
import { medmindBlue } from '../../constants/styles';

export default class CameraHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    hasMenu: PropTypes.bool,
    hasSettings: PropTypes.bool,
    fontSize: PropTypes.number
  };

  static defaultProps = {
    title: 'Medmind',
    hasMenu: true,
    hasSettings: true,
    fontSize: 24
  };

  state = {};



  openSettings = () => {
    //to be filled later
  };

  onBackButtonPress = () => {
    const {navigate} = this.props.navigation;
    navigate('timelineScreen');
  }

  render() {
    const {title, hasMenu, hasSettings} = this.props;
    return (
      <View {...this.props} style={styles.container}>
        <StatusBarBackground />
        <View style={styles.appBar}>
          {hasMenu && (
            <RoundedButton
              onPress={() => this.onBackButtonPress()}
              name={'Back'}
              buttonStyle={styles.buttonStyle}
            />
          )}
          {title && (
            <Text style={styles.appBarTitle}>{title}</Text>
          )}
          {hasSettings && (
            <TouchableOpacity
              style={styles.settingsWrapper}
              onPress={this.openSettings}
            >
              <MaterialCommunityIcons
                style={styles.settingsIcon}
                name="dots-vertical"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: medmindBlue,
    width: '100%'
  },
  appBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 10
  },
  hamburgerWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    flex: 1
  },
  hamburgerIcon: {
    alignSelf: 'flex-start'
  },
  settingsWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    flex: 1
  },
  settingsIcon: {
    alignSelf: 'flex-end'
  },
  appBarTitle: {
    color: 'white',
    fontWeight: '500',
    fontFamily: 'System',
    fontSize: 24,
    flex: 8,
    textAlign: 'center',
    position: 'relative',
    right: 7,
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'gray',
    alignSelf: 'center',
    width: 50,
    height: 37
  },
});
