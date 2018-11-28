import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
// import { AntDesign } from '@expo/vector-icons';

import { medmindBlue } from '../../constants/styles';
import styles from './styles';

export default class EndMenu extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        selectedOccurance: PropTypes.number,

    };

    render() {
        return (
            <View style={{flex:1, flexDirection: 'column'}}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={this.props.selectedOccurance !== 0 ? styles.radioButton : styles.radioButtonActive} onPress={() => {this.props.onPress(0)}}>
                    </TouchableOpacity>
                    <Text>  Never</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={this.props.selectedOccurance !== 1 ? styles.radioButton : styles.radioButtonActive} onPress={() => {this.props.onPress(1)}}>
                    </TouchableOpacity>
                    <Text>  On </Text>
                    <TextInput
                        placeholder="MM/DD"
                        onChangeText={(text) => this.setState({text})}
                        keyboardType="numeric"
                    />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={this.props.selectedOccurance !== 2 ? styles.radioButton : styles.radioButtonActive} onPress={() => {this.props.onPress(2)}}>
                </TouchableOpacity>
                <Text>  After </Text>
                    <TextInput
                        placeholder= "1"
                        onChangeText={(text) => this.setState({text})}
                        keyboardType="numeric"
                    /> 
                <Text>occurences</Text>
            </View>
            </View>
        )
    }
}
