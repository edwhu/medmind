import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateNewReminder } from "../../redux/actions/reminder";
import { Dimensions, View, Text, StyleSheet, Platform, TextInput, Picker, TouchableOpacity } from 'react-native';
import { medmindBlue } from '../../constants/styles';
import styles from './styles';


class RepeatPrompt extends Component {
    static propTypes = {
      onPress: PropTypes.func,
      onChangeText: PropTypes.func,
    }

    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.row}>
                    <Text style={styles.text}>Repeats every </Text>
                    <TextInput
                        placeholder="1"
                        value={String(this.props.newReminder.repeatIntervalCount)}
                        onChangeText={this.props.onChangeText}
                        keyboardType="numeric"
                        style={styles.lightText}
                    />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity 
                        style={[styles.repeatButton, (this.props.newReminder.repeatInterval === 'day') && styles.pressedButton]} 
                        onPress={() => {this.props.onPress('day')}}
                    >
                        <Text style={[styles.option, (this.props.newReminder.repeatInterval === 'day') && styles.pressedText]}>days</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.repeatButton, (this.props.newReminder.repeatInterval === 'week') && styles.pressedButton]} 
                        onPress={() => {this.props.onPress('week')}}
                    >
                        <Text style={[styles.option, (this.props.newReminder.repeatInterval === 'week') && styles.pressedText]}>weeks</Text>
                    </TouchableOpacity>
                </View>
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
