import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  DatePickerIOS,
  DatePickerAndroid,
  Platform,
  Text
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import PropTypes from 'prop-types';
import moment from 'moment';
import { medmindBlue } from '../../constants/styles';

export default class CollapsibleDatePicker extends Component {
  static propTypes = {
    setDate: PropTypes.func.isRequired,
    date: PropTypes.object
  };

  state = {
    collapsed: true,
    date: this.props.date ? this.props.date : moment()
  };

  datePickerOnPress = () => {
    this.setState({ collapsed: !this.state.collapsed });
    if(Platform.OS == 'android')
      this.openUpPicker();
  };

  setDate = (newDate) => {
    const date = moment(newDate);
    this.setState({ date });
    this.props.setDate(date);
  };

  async openUpPicker() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
        mode: 'default',
      });
      if (action === DatePickerAndroid.dateSetAction) {
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        const newDate = new Date(year, month, day, hours, min);
        this.setDate(newDate);
      }
    } catch ({code, message}) {
      //TODO
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.form} onPress={this.datePickerOnPress}>
          <View style={styles.container}>
            <Text>{this.props.header}</Text>
            <Text>
              {`${this.state.date.format('ddd, MMM D YYYY, h:mm a')}`}
            </Text>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed}>
          <View>
            {
              Platform.OS == 'ios' &&
                <DatePickerIOS
                  date={this.state.date.toDate()}
                  onDateChange={this.setDate}
                />
            }
          </View>
        </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  form: {
    height: 40,
    borderColor: medmindBlue,
    borderBottomWidth: 1,
    marginHorizontal: 20
  }
});
