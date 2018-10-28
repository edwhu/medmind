import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';

import { Button, ButtonGroup } from 'react-native-elements';

export default class WeekdayButtons extends Component {
    render() {
        return (
          <ButtonGroup>
            <Button color="gray">S</Button> {' '}
            <Button color="gray">M</Button> {' '}
            <Button color="gray">T</Button> {' '}
            <Button color="gray">W</Button> {' '}
            <Button color="gray">T</Button> {' '}
            <Button color="gray">F</Button> {' '}
            <Button color="gray">S</Button> {' '}
          </ButtonGroup>
    }

}