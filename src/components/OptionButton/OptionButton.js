import React, { Component } from "react";
import PropTypes from "prop-types";
import {medmindblue} from "../../constants/styles";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ActionButton from 'react-native-action-button';
import { white } from "ansi-colors";

export default class OptionButton extends Component {
    static propTypes = { 
        cameraOnPress: PropTypes.func.isRequired,
        drugOnPress: PropTypes.func.isRequired,
    };

    static defaultProps = {};

    render() {
        return (
            <ActionButton buttonColor="rgba(101, 192, 190, 1)" size = {70}>
                <ActionButton.Item buttonColor='#9b59b6' title="Camera" onPress={this.props.cameraOnPress} textStyle={styles.itemStyle} size={60}>
                    <Ionicons name="md-camera" style={styles.iconStyle}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Manual" onPress={this.props.drugOnPress} textStyle={styles.itemStyle} size={60}>
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
    }
});