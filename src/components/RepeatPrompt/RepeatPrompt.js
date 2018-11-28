import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, Text, StyleSheet, Platform, TextInput, Picker } from 'react-native';
import { medmindBlue } from '../../constants/styles';
import styles from './styles';


export default class RepeatPrompt extends Component {
    static propTypes = {
      onSelect: PropTypes.func,
      selectedValue: PropTypes.string,
    }

    render() {
        return (
            <View style={styles.container}> 
                <Text>Repeats every </Text>
                <TextInput
                    placeholder="1"
                    onChangeText={(text) => this.setState({text})}
                    keyboardType="numeric"
                />
                <Picker
                    mode="dropdown"
                    selectedValue={this.props.selectedValue}
                    style={styles.picker}
                    onValueChange={this.props.onSelect}>
                    <Picker.Item label="days" value="day" />
                    <Picker.Item label="weeks" value="week" />
                    <Picker.Item label="months" value="month" />
                 </Picker>

            </View>
        )
    }
}
