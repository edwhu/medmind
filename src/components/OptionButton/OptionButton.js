import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';

export default class OptionButton extends Component {
    static propTypes = { 
      cameraOnPress: PropTypes.func.isRequired,
      drugOnPress: PropTypes.func.isRequired,
    };

    static defaultProps = {};

    render() {
      return (
        <ActionButton buttonColor="rgba(101, 192, 190, 1)" size = {75}>
          <ActionButton.Item 
            buttonColor="rgba(101,192,190,1)" 
            title="Scan Drug Label" 
            onPress={this.props.cameraOnPress} 
            textStyle={styles.itemStyle} 
            textContainerStyle={styles.containerStyle}
            size={65}>
            <Ionicons name="md-camera" style={styles.iconStyle}/>
          </ActionButton.Item>
          <ActionButton.Item 
            buttonColor="rgba(101,192,190,1)" 
            title="Add Drug Manually" 
            onPress={this.props.drugOnPress} 
            textStyle={styles.itemStyle}
            textContainerStyle={styles.containerStyle}
            size={65}
          >
            <Ionicons name="md-list-box" style={styles.iconStyle}/>
          </ActionButton.Item>
        </ActionButton>
      );
    }
}


const styles = StyleSheet.create({
  itemStyle: {
    fontSize: 15,
  },
  iconStyle: {
    color: 'white',
    fontSize: 20,
  },
  containerStyle: {
    height: 25,
  }
});