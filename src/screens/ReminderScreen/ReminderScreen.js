import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Switch } from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import StatusBarBackground from '../../components/StatusBarBackground/StatusBarBackground';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import { medmindBlue } from '../../constants/styles';
import styles from './styles';

class ReminderScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Reminders'
  };

  static propTypes = {};

  static defaultProps = {};

  state = {};
  
  // callback for login errors
  onError = error => {
    console.log('Error', error);
  };

  state = {
    title: this.props.title || 'Reminder',
  };

  getDrugById = id => {
    return this.props.drugs.filter(
      function(drug){ return drug.id == id }
    );
  };

  displayRepeat = reminder => {
    switch (reminder.repeat) {
      case 'week':
        return ', every ' + reminder.time.format('dddd');
      case 'day':
        return ', every day';
      case 'hour':
        return ', every hour';
      case 'month':
        return ', monthly';
      case 'year':
        return ', yearly';
      default:
        return '';
    }
  };

  render() {
    return (
      <View style={styles.container} >
        <ScreenHeader {...this.props} title={this.state.title} />
        {this.props.reminders.map((reminder) => {
          var drug = this.getDrugById(reminder.id)[0];
          return (
            <View>
              <View style={styles.drug}>
                <Text style={styles.drugName}>{drug.label}</Text>
                <Switch trackColor={medmindBlue} tintColor='rgb(232,232,232)' value={true} style={styles.switchButton} />
              </View>
              <View style={styles.horizontalLine} />
              <View style={styles.reminder}>
                <View style={styles.info}>
                  <View style={styles.timeContainer} >
                    <Text style={styles.timeLabel}>{reminder.time.format('h:mm')} </Text>
                    <Text style={styles.timeMidday}>{reminder.time.format('A')}</Text>
                  </View>
                  <View style={styles.detailsContainer} >
                    <Text style={styles.details}> {reminder.dosage}</Text>
                    <Text style={styles.details}>{this.displayRepeat(reminder)}</Text>
                  </View>
                </View>
                <Switch trackColor={medmindBlue} tintColor='rgb(232,232,232)' value={true} style={styles.switchButton} />
              </View>
              <View style={styles.horizontalLine} />
            </View>
          )
        })}
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    reminders: state.remindersReducer.reminders,
    drugs: state.drugInfoReducer.drugInfo,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderScreen);