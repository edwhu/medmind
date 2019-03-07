import React, { Component } from 'react';
import ColorPalette from 'react-native-color-palette';
import { white } from 'ansi-colors';

export default class ColorPicker extends Component {

  render() {
    return (
      <ColorPalette
        defaultColor={'#AD2452'}
        colors={['#AD2452', '#EC4125', '#E1C750', '#39854B', '#4645B1', '#9122A5',
          '#D82F5A', '#ED662B', '#BECF4A', '#42998A', '#7C80C7', '#785448',
          '#D52D1F', '#EE9235', '#7AB952', '#3F98E2', '#B497D7', '#616161',
          '#E57670', '#F4C142', '#53BC81', '#4E7BF0', '#9F60AB', '#CDCDCD']}
        title={'Color'}
        scaleToWindow={true}
      />
    );
  }

}