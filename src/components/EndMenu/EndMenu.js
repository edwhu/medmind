import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
// import { AntDesign } from '@expo/vector-icons';

import { medmindBlue } from '../../constants/styles';
import styles from './styles';

export default class EndMenu extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        selectedOccurance: PropTypes.string,
        onChangeTextEndDate: PropTypes.func,
        onChangeTextCount: PropTypes.func,
    };

    render() {
        return (
            <View style={{flex:1, flexDirection: 'column'}}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={this.props.selectedOccurance !== 'never' ? styles.radioButton : styles.radioButtonActive} 
                        onPress={() => {this.props.onPress('never')}}>
                    </TouchableOpacity>
                    <Text>  Never</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={this.props.selectedOccurance !== 'end date' ? styles.radioButton : styles.radioButtonActive} 
                        onPress={() => {this.props.onPress('end date')}}>
                    </TouchableOpacity>
                    <Text>  On </Text>
                    <TextInput
                        placeholder="MM/DD"
                        onChangeText={this.props.onChangeTextEndDate}
                        keyboardType="numeric"
                    />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={this.props.selectedOccurance !== 'set number' ? styles.radioButton : styles.radioButtonActive}
                    onPress={() => {this.props.onPress('set number')}}>
                </TouchableOpacity>
                <Text>  After </Text>
                    <TextInput
                        placeholder= "1"
                        onChangeText={this.props.onChangeTextCount}
                        keyboardType="numeric"
                    /> 
                <Text>occurences</Text>
            </View>
            </View>
        )
    }
}
