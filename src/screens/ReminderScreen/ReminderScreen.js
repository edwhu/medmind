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

  render() {
    return (
      <View style={styles.container} >
        <ScreenHeader {...this.props} title={this.state.title} />
        {this.props.reminders.map((reminder, index) => {
          return (
            <View>
              <View style={styles.drug}>
                <Text style={styles.drugName}>Amoxicillin</Text>
                <Switch trackColor={medmindBlue} tintColor='rgb(232,232,232)' value={true} style={styles.switchButton} />
              </View>
              <View style={styles.horizontalLine} />
              <View style={styles.reminder} key={index}>
                <View style={styles.info}>
                  <View style={styles.timeContainer} >
                    <Text style={styles.timeLabel}>{reminder.time.format('h:mm')} </Text>
                    <Text style={styles.timeMidday}>{reminder.time.format('A')}</Text>
                  </View>
                  <View style={styles.detailsContainer} >
                    <Text style={styles.details}> 500mg, every day </Text>
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

// this.props.reminders to call in my screen
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