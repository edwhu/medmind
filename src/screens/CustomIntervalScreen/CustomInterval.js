import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateNewReminder } from '../../redux/actions/reminder';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import styles from './styles';
import RepeatPrompt from '../../components/RepeatPrompt/RepeatPrompt';
import WeekdayButtons from '../../components/WeekdayButtons/WeekdayButtons';
import EndMenu from '../../components/EndMenu/EndMenu';

class CustomIntervalScreen extends Component {
    static propTypes = {
      title: PropTypes.string,
    };

    static defaultProps = {};

    onWeekdayPress = (weekday) => {
      const selectedWeekdays = this.props.newReminder.selectedWeekdays.slice();
      selectedWeekdays[weekday] = !this.props.newReminder.selectedWeekdays[weekday];
      this.props.updateNewReminder('selectedWeekdays', selectedWeekdays);
    }

    onOccurancePress = (occurence) => {
      this.props.updateNewReminder('occurence', occurence);
    }

    onIntervalPress = (interval) => {
      this.props.updateNewReminder('repeatInterval', interval);
    }

    render() {
      const { updateNewReminder, newReminder } = this.props;
      const weekdayButtons = <View style={styles.weekdayContainer}>
        <Text style={styles.text}>Repeats On</Text>
        <WeekdayButtons 
          onPress={this.onWeekdayPress} 
          selectedButtonIndex={newReminder.selectedWeekdays}
        />
      </View>;
      return (
        <View style={styles.container}>
          <ScreenHeader title= { 'CUSTOM' } hasMenu = {false} hasSettings = {false} />
          <View style={styles.repeatContainer}>
            <RepeatPrompt 
              onPress={this.onIntervalPress} 
              onChangeText={(repeatIntervalCount) => updateNewReminder('repeatIntervalCount', repeatIntervalCount)}
            />
          </View>
          {(newReminder.repeatInterval === 'week') ? weekdayButtons : null}
          <View style={styles.occuranceContainer}>
            <Text style={styles.text}>Ends</Text>
            <EndMenu 
              onPress={this.onOccurancePress} 
              onChangeTextCount={(endOccurenceCount) => updateNewReminder('endOccurenceCount', endOccurenceCount)}
              onSetDate={(endDate) => updateNewReminder('endDate', endDate)}
            />
          </View>
        </View>
      );
    }
}

function mapStateToProps(state) {
  return {
    newReminder: state.remindersReducer.newReminder,
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateNewReminder: bindActionCreators(updateNewReminder, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomIntervalScreen);
