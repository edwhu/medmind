import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateNewReminder } from '../../redux/actions/reminder';
import PropTypes from 'prop-types';
import CollapsibleDatePicker from '../../components/CollapsibleDatePicker/CollapsibleDatePicker';
import styles from './styles';

class EndMenu extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    onSetDate: PropTypes.func,
    onChangeTextCount: PropTypes.func,
  };

  render() {
    const { newReminder, onPress, onSetDate, onChangeTextCount } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={newReminder.occurence !== 'never' ? styles.radioButton : styles.radioButtonActive} 
            onPress={() => {onPress('never');}}>
          </TouchableOpacity>
          <Text style={styles.text}>Never</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.dateLabel} > 
            <TouchableOpacity 
              style={newReminder.occurence !== 'end date' ? styles.radioButton : styles.radioButtonActive} 
              onPress={() => {onPress('end date');}}>
            </TouchableOpacity>
            <Text style={styles.text}>On </Text> 
          </View>
          <CollapsibleDatePicker
            setDate={onSetDate}
            date={newReminder.endDate}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={newReminder.occurence !== 'set number' ? styles.radioButton : styles.radioButtonActive}
            onPress={() => {onPress('set number');}}>
          </TouchableOpacity>
          <Text style={styles.text}>After </Text>
          <TextInput
            placeholder= "1"
            onChangeText={onChangeTextCount}
            value={String(newReminder.endOccurenceCount)}
            keyboardType="numeric"
            style={styles.lightText}
          /> 
          <Text style={styles.text}>occurences</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
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
)(EndMenu);
