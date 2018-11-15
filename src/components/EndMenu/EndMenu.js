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
            {/*
                [0, 1, 2].map((index) => {
                    const buttonStyle = index === this.props.selectedOccurance ? styles.pressedIcon : styles.unpressedIcon;
                    console.log(this.props.selectedOccurance);
                    return (
                        <View key={index} style={{flex: 1, flexDirection: 'column'}}>
                            <Text> I'm HERE</Text>
                            <TouchableOpacity onPress={() => {this.props.onPress(index)}}  >
                                <Text>HELLO</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })
            */}
            <View style={{flexDirection: 'row', height: 40, alignItems: 'center'}}>
                <TouchableOpacity style={this.props.selectedOccurance !== 0 ? styles.radioButton : styles.radioButtonActive} onPress={() => {this.props.onPress(0)}}>
                  {/*} { this.props.selectedOccurance === 0 && <AntDesign name="check" color="white" /> } */}
                </TouchableOpacity>
                <Text>  Never</Text>
            </View>
            <View style={{flexDirection: 'row', height: 40, alignItems: 'center'}}>
                <TouchableOpacity style={this.props.selectedOccurance !== 1 ? styles.radioButton : styles.radioButtonActive} onPress={() => {this.props.onPress(1)}}>
                </TouchableOpacity>
                <Text>  On </Text>
                <TextInput
                    placeholder="MM/DD"
                    onChangeText={(text) => this.setState({text})}
                    keyboardType="numeric"
                />
            </View>
            <View style={{flexDirection: 'row', height: 40, alignItems: 'center'}}>
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
