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
    };

    onWeekdayPress = (weekday) => {
        let newSelectedWeekday = this.state.selectedWeekday;
        newSelectedWeekday[weekday] = !this.state.selectedWeekday[weekday];
        this.setState({selectedWeekday: newSelectedWeekday});
        console.log("onWeekdayCLick called");
    }

    onOccurancePress = (button) => {
        let newSelectedOccurance = button;
        this.setState({selectedOccurance: newSelectedOccurance});
        console.log("onOccurancePress called");
    }

    onIntervalPress = (interval) => {
        this.setState({repeatInterval: interval});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScreenHeader title= { 'CUSTOM' } hasMenu = {false} hasSettings = {false} />
                <View style={{borderBottomColor: medmindBlue, borderBottomWidth: 1}}>
                <RepeatPrompt onSelect={this.onIntervalPress}/>
                </View>
                <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, height:100}}>
                <Text>Repeats On</Text>
                <WeekdayButtons onPress={this.onWeekdayPress} selectedButtonIndex={this.state.selectedWeekday}/>
                </View>
                <Text>Ends</Text>
                <EndMenu onPress={this.onOccurancePress} selectedOccurance={this.state.selectedOccurance}/>
            </View>
        );
    }
}
