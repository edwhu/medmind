import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from 'react-native-elements';
import { medmindBlue } from '../../constants/styles';

export default class WeekdayButtons extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    selectedButtonIndex: PropTypes.number,

  };
    render() {
        return (
          <View>
            {
              ['S','M','T','W','T','F','S'].map((buttonTitle, index) => {
                const buttonColor = index === this.props.selectedButtonIndex ? medmindBlue : 'gray';
                return <Button key={index} color={buttonColor}>{buttonTitle}</Button>;
              })
            }
          </View>
        )
    }

}
