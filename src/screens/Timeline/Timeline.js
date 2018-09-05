import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import CalendarWeek from '../../components/CalendarWeek/CalendarWeek';
import { MONTHS } from '../../constants/constants';
import styles from './styles';
import moment from 'moment';

export default class TimelineScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Timeline',
  };

  static propTypes = {
  };

  static defaultProps = {
  };

  state = {
    title: this.props.title || 'April 2018',

  };

  componentWillMount() {
    const now = moment();
    const month = MONTHS[now.month()];
    const year = now.year();

    this.setState({
      title: `${month.toUpperCase()} ${year}`,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <CalendarWeek />
      </View>
    );
  };
}

