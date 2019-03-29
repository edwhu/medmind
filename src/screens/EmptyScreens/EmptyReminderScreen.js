import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import EmptyReminderIcon from '../../assets/empty-reminder.png';
import PlusButton from '../../components/PlusButton/PlusButton';
import styles from './styles';

export default class EmptyReminderScreen extends Component {
  static propTypes = { 
    onPress: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View>
        <View style={styles.iconContainer}>
          <Image source={EmptyReminderIcon} style={styles.icon} />
          <Text style={styles.iconText}>No Reminders</Text>
          <Text style={styles.iconTextBody}>
            There are no reminders right now.{'\n'}
            Use the <Text style={styles.smallPlus}> + </Text> 
            button to add reminders.
          </Text>
        </View>
        <PlusButton onPress={this.props.onPress}/>
      </View>
    );
  }
}