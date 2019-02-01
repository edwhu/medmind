import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateNewReminder } from "../../redux/actions/reminder";
import { Dimensions, View, Text, StyleSheet, Platform, TextInput, Picker, TouchableOpacity } from 'react-native';
import { medmindBlue } from '../../constants/styles';
import { Ionicons } from "@expo/vector-icons";
import styles from './styles';


class RepeatPrompt extends Component {
    static propTypes = {
      onSelect: PropTypes.func,
      onChangeText: PropTypes.func,
    }

    render() {
        return (
            <View style={styles.container}> 
                <Text style={styles.text}>Repeats every </Text>
                <TextInput
                    placeholder="1"
                    value={String(this.props.newReminder.repeatIntervalCount)}
                    onChangeText={this.props.onChangeText}
                    keyboardType="numeric"
                    style={styles.lightText}
                />
                <Picker
                    selectedValue={this.props.newReminder.repeatInterval}
                    style={styles.picker}
                    onValueChange={this.props.onSelect}>
                    <Picker.Item label="days" value="day" />
                    <Picker.Item label="weeks" value="week" />
                    <Picker.Item label="months" value="month" />
                </Picker>
                <Ionicons name="md-arrow-dropdown" style={styles.downArrow} />
            </View>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        newReminder: state.remindersReducer.newReminder,
    };
}

const mapDispatchToProps = dispatch => ({
    updateNewReminder: bindActionCreators(updateNewReminder, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RepeatPrompt);
