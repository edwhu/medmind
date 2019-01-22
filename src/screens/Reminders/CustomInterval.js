import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { medmindBlue } from '../../constants/styles';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import styles from './styles';
import RepeatPrompt from '../../components/RepeatPrompt/RepeatPrompt';
import WeekdayButtons from '../../components/WeekdayButtons/WeekdayButtons';
import EndMenu from '../../components/EndMenu/EndMenu';

export default class CustomIntervalScreen extends Component {
    static propTypes = {
      title: PropTypes.string,
    };

    static defaultProps = {};

    state = {
        repeatIntervalCount: 1,
        repeatInterval: 'weeks',
        selectedWeekday: [false, false, false, false, false, false, false],
        selectedOccurance: 0,
        endDate: "MM/DD",
        endOccurenceCount: 1,
    };

    onWeekdayPress = (weekday) => {
        const selectedWeekday = this.state.selectedWeekday.slice();
        selectedWeekday[weekday] = !this.state.selectedWeekday[weekday];
        this.setState({ selectedWeekday });
    }

    onOccurancePress = (button) => {
<<<<<<< HEAD
        let newSelectedOccurance = button;
        this.setState({ selectedOccurance: button });
=======
        const selectedWeekday = this.state.selectedWeekday.slice();
        selectedWeekday[weekday] = !this.state.selectedWeekday[weekday];
        this.setState({ selectedWeekday });
        this.setState({selectedOccurance: newSelectedOccurance});
>>>>>>> dad4105f972077622c446b9ddc01ddd53e69bbfa
    }

    onIntervalPress = (interval) => {
        this.setState({repeatInterval: interval});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScreenHeader title= { 'CUSTOM' } hasMenu = {false} hasSettings = {false} />
                <View style={styles.repeatContainer}>
                    <RepeatPrompt onSelect={this.onIntervalPress} selectedValue={this.state.repeatInterval}/>
                </View>
                <View style={styles.weekdayContainer}>
                    <Text>Repeats On</Text>
                <WeekdayButtons onPress={this.onWeekdayPress} selectedButtonIndex={this.state.selectedWeekday}/>
                </View>
                <View style={styles.occuranceContainer}>
                    <Text>Ends</Text>
                    <EndMenu onPress={this.onOccurancePress} selectedOccurance={this.state.selectedOccurance}/>
                </View>
            </View>
        );
    }
}
