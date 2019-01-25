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
        selectedOccurance: 'never',
        endDate: "MM/DD",
        endOccurenceCount: 1,
    };

    onWeekdayPress = (weekday) => {
        const selectedWeekday = this.state.selectedWeekday.slice();
        selectedWeekday[weekday] = !this.state.selectedWeekday[weekday];
        this.setState({ selectedWeekday });
        this.props.navigation.state.params.returnWeekdays(selectedWeekday);
    }

    onOccurancePress = (occurence) => {
        this.setState({ selectedOccurance: occurence });
        console.log(this.state.endOccurenceCount);
        console.log(this.state.endDate);
        this.props.navigation.state.params.returnOccurence(
            this.state.selectedOccurance,
            this.state.endOccurenceCount, 
            this.state.endDate
        );
    }

    onIntervalPress = (interval) => {
        this.setState({repeatInterval: interval});
        this.props.navigation.state.params.returnInterval(
            this.state.repeatInterval, 
            this.state.repeatIntervalCount
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScreenHeader title= { 'CUSTOM' } hasMenu = {false} hasSettings = {false} />
                <View style={styles.repeatContainer}>
                    <RepeatPrompt 
                        onSelect={this.onIntervalPress} 
                        selectedValue={this.state.repeatInterval}
                        onChangeText={(repeatIntervalCount) => this.setState({repeatIntervalCount})}
                    />
                </View>
                <View style={styles.weekdayContainer}>
                    <Text>Repeats On</Text>
                <WeekdayButtons 
                    onPress={this.onWeekdayPress} 
                    selectedButtonIndex={this.state.selectedWeekday}
                />
                </View>
                <View style={styles.occuranceContainer}>
                    <Text>Ends</Text>
                    <EndMenu 
                        onPress={this.onOccurancePress} 
                        selectedOccurance={this.state.selectedOccurance}
                        onChangeTextCount={(endOccurenceCount) => this.setState({endOccurenceCount})}
                        onChangeTextEndDate={(endDate) => this.setState({endDate})}
                    />
                </View>
            </View>
        );
    }
}
