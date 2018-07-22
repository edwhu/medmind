import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import MedmindLogo from '../../assets/medmind-logo.png';
import { medmindBlue } from '../../constants/styles';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import styles from './styles';

export default class TimelineScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Timeline',
  };

  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {};

  state = {
    title: this.props.title || 'April 2018',

  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <View style={styles.calendarWrapper}>
          <Text style={styles.text}> hello</Text>
        </View>
      </View>
    );
  }
}

