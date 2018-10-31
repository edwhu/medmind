import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from 'react-native-elements';
import { medmindBlue } from '../../constants/styles';
import styles from '../../screens/TermsConditions/styles';

export default class WeekdayButtons extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    selectedButtonIndex: PropTypes.array,

  };
    render() {
        return (
          <View>
            {
              ['S','M','T','W','T','F','S'].map((buttonTitle, index) => {
                const buttonColor = this.props.selectedButtonIndex[index] === true ? medmindBlue : 'gray';
                console.log(this.props.selectedButtonIndex);
                return <Button  title={buttonTitle} key={index} backgroundColor={buttonColor} onPress={() => {this.props.onPress(index)}}  ></Button>;
              })
            }
          </View>
        )
    }

}
