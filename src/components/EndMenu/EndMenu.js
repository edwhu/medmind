import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { medmindBlue } from '../../constants/styles';
import styles from '../../screens/Reminders/styles';

export default class EndMenu extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        selectedOccurance: PropTypes.number,

    };

    render() {
        return (
            <View style={{flex:1, flexDirection: 'column'}}>
            {
                [0, 1, 2].map((index) => {
                    const buttonStyle = index === this.props.selectedOccurance ? styles.pressedIcon : styles.unpressedIcon;
                    console.log(this.props.selectedOccurance);
                    return (
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text> I'm HERE</Text>
                            <TouchableOpacity  key={index} onPress={() => {this.props.onPress(index)}}  >
                                <Text>HELLO</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })
            }
            </View>
        )
    }
}