import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateNewReminder } from "../../redux/actions/reminder";
import { medmindBlue } from '../../constants/styles';
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

    state = {
        repeatIntervalCount: 1,
        repeatInterval: 'weeks',
        selectedWeekday: [false, false, false, false, false, false, false],
        selectedOccurance: 'never',
        endDate: "MM/DD",
        endOccurenceCount: 1,
    };

    onWeekdayPress = (weekday) => {
        const selectedWeekdays = this.props.newReminder.selectedWeekdays.slice();
        selectedWeekdays[weekday] = !this.props.newReminder.selectedWeekdays[weekday];
        this.props.updateNewReminder("selectedWeekdays", selectedWeekdays);
    }

    onOccurancePress = (occurence) => {
        this.props.updateNewReminder("occurence", occurence);
    }

    onIntervalPress = (interval) => {
        this.props.updateNewReminder("repeatInterval", interval);
    }

    render() {
        const weekdayButtons = <View style={styles.weekdayContainer}>
                                    <Text style={styles.text}>Repeats On</Text>
                                    <WeekdayButtons 
                                        onPress={this.onWeekdayPress} 
                                        selectedButtonIndex={this.props.newReminder.selectedWeekdays}
                                    />
                                </View>
        return (
            <View style={styles.container}>
                <ScreenHeader title= { 'CUSTOM' } hasMenu = {false} hasSettings = {false} />
                <View style={styles.repeatContainer}>
                    <RepeatPrompt 
                        onSelect={this.onIntervalPress} 
                        onChangeText={(repeatIntervalCount) => this.props.updateNewReminder("repeatIntervalCount", repeatIntervalCount)}
                    />
                </View>
                {(this.props.newReminder.repeatInterval === "week") ? weekdayButtons : null}
                <View style={styles.occuranceContainer}>
                    <Text style={styles.text}>Ends</Text>
                    <EndMenu 
                        onPress={this.onOccurancePress} 
                        onChangeTextCount={(endOccurenceCount) => this.props.updateNewReminder("endOccurenceCount", endOccurenceCount)}
                        onSetDate={(endDate) => this.props.updateNewReminder("endDate", endDate)}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        newReminder: state.remindersReducer.newReminder,
    };
}

const mapDispatchToProps = dispatch => ({
    updateNewReminder: bindActionCreators(updateNewReminder, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomIntervalScreen);
