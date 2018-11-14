import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, Text, StyleSheet, Platform, TextInput, Picker } from 'react-native';
import { medmindBlue } from '../../constants/styles';


export default class RepeatPrompt extends Component {
    static propTypes = {
      onSelect: PropTypes.func,
    }

    render() {
        return (
            <View>
                <Text>Repeats every </Text>
                <TextInput
                    placeholder="1"
                    onChangeText={(text) => this.setState({text})}
                />
                <Picker
                    mode="dropdown"
                    selectedValue={'days'}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="days" value="day" />
                    <Picker.Item label="weeks" value="week" />
                    <Picker.Item label="months" value="month" />
                 </Picker>

            </View>
        )
    }
}
