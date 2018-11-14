import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, Platform, TextInput } from 'react-native';
import { medmindBlue } from '../../constants/styles';
import { Picker } from 'react-native'

class IntervalMenu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.onPress.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    onPress() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            //use touchable opacity and collapsible
            // <Dropdown isOpen={this.state.dropdownOpen} onPress={this.onPress}>
            //      <DropdownMenu>
            //          <DropdownItem>days</DropdownItem>
            //          <DropdownItem>weeks</DropdownItem>
            //          <DropdownItem>months</DropdownItem>
            //      </DropdownMenu>
            //  </Dropdown>
            <View>
              <Text>Repeat Prompt</Text>
            </View>
        );
    }
}

export default class RepeatPrompt extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View>
                <Text>Repeats every </Text>
                <TextInput
                    placeholder="1"
                    onChangeText= {(text) => this.setState({text})}
                />
                <Picker
                    selectedValue={this.state.language}
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
