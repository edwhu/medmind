import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class PlusButton extends Component {

    render() {
        return (
            <TouchableOpacity 
            style={styles.button}
            onPress={this.props.onPress}>
            <Text style={styles.plus}>+</Text>
            </TouchableOpacity> 
        );
    }
}