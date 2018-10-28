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

export default class CustomIntervalScreen extends Component {
    static propTypes = {
      title: PropTypes.string,
    };
    
    static defaultProps = {};

    state = {
        repeatIntervalCount: 1,
        repeatInterval: 'week',
        selectedWeekday: undefined,
    };

    onWeekdayClick(weekday) {
        this.setState({selectedWeekday: weekday});
    }

    render() {
        return (
            <View>
                <ScreenHeader title= { 'CUSTOM' } hasMenu = {false} hasSettings = {false} />
                <RepeatPrompt/>
                <View style={{height: 1, backgroundColor: medmindBlue}} />
                <Text>Repeats On</Text>
                <WeekdayButtons onClick= {this.onWeekdayClick}/>
                <View style={{height: 1, backgroundColor: 'gray'}} />
                <Text>Ends</Text>
                <EndMenu/>
            </View>
        )
    }
}