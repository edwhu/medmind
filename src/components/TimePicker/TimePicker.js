import React, { Component } from 'react';
import {
  View,
  DatePickerIOS,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class TimePicker extends Component {
  static propTypes = {
    setDate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { collapsed: true, chosenDate: moment() };
  }

  setDate = (newDate) => {
    const date = moment(newDate);
    this.setState({ chosenDate: date });
    this.props.setDate(date);
  };

  render() {
    return (
      <View>
        <DatePickerIOS
          date={this.state.chosenDate.toDate()}
          onDateChange={this.setDate}
          mode="time"
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   }
// });
