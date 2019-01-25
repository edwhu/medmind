import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { medmindBlue } from '../../constants/styles';
import styles from './styles';
export default class WeekdayButtons extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    selectedButtonIndex: PropTypes.array,

  };
    render() {
        return (
          <View style={styles.container}>
            {
              ['S','M','T','W','T','F','S'].map((buttonTitle, index) => {
                const buttonColor = this.props.selectedButtonIndex[index] === true ? medmindBlue : 'gray';
                return <View style={styles.buttonHolder}>
                <TouchableOpacity 
                  style={[styles.Button, this.props.selectedButtonIndex[index] && styles.pressedButton]} 
                  key={index} backgroundColor={buttonColor} 
                  onPress={() => {this.props.onPress(index)}}
                >
                  <Text>{buttonTitle}</Text> 
                </TouchableOpacity>
                </View>;
              })
            }
          </View>
        )
    }

}
