import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, Platform, TextInput } from 'react-native';
import { medmindBlue } from '../../constants/styles';

class IntervalMenu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            // <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            //     <DropdownMenu>
            //         <DropdownItem>days</DropdownItem>
            //         <DropdownItem>weeks</DropdownItem>
            //         <DropdownItem>months</DropdownItem>
            //     </DropdownMenu>
            // </Dropdown>
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
                <IntervalMenu/>
            </View>
        )
    }
}
