import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View,
  ScrollView,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from './styles';
import { DAYS } from '../../constants/constants';
import getRowsFromDrugInfo from './getRowsFromDrugInfo';
import DrugRow from '../DrugRow/DrugRow';
const { width } = Dimensions.get('window');

class CalendarWeek extends Component {
  static navigationOptions = {};

  static propTypes = {
    week: PropTypes.objectOf(PropTypes.any)
  };

  static defaultProps = {
    drugInfo: [],
    drugColors: ['blue', 'red', 'green', 'orange'],
    screenWidth: Dimensions.get('window')
  };

  constructor(props) {
    super(props);
    const now = moment();
    const month = now.month();
    const dateOfMonth = now.date(); // 1-31

    const theWeek = [];
    const weekMonth = [];
    const temp = this.props.week.beginning.clone();
    // construct week
    for (let i = 0; i < 7; i++) {
      theWeek.push(temp.date());
      weekMonth.push(temp.month());
      temp.add(1, 'day');
    }

    this.state = {
      month,
      dateOfMonth,
      theWeek,
      weekMonth,
    };
  }

  _mapDates = () => {
    const columnWidth = width / 7;
    return this.state.theWeek.map((day, index) => {
      const isToday =
        this.state.dateOfMonth.toString() === day &&
        this.state.month === this.state.weekMonth[index];
      const dayText = DAYS[index] ? DAYS[index] : '';

      return (
        <View
          style={[
            styles.dayColumn,
            { width: columnWidth, borderRightWidth: 1 }
          ]}
          key={day + index}
        >
          <View style={styles.date}>
            <Text
              style={[
                styles.dayNumberText,
                {
                  color: isToday ? '#4185F5' : 'black',
                  fontWeight: isToday ? '600' : '400'
                }
              ]}
            >
              {day}
            </Text>
            <Text
              style={[
                styles.dayText,
                {
                  color: isToday ? '#4185F5' : 'black',
                  fontWeight: isToday ? '700' : '400'
                }
              ]}
            >
              {dayText}
            </Text>
          </View>
        </View>
      );
    });
  };

  render() {
    const dates = this._mapDates();

    const drugBars = this.props.drugInfoTest.map((drugInfoList) => {
      return <DrugRow
        key={drugInfoList[0].id}
        drugInfoList={drugInfoList}
        beginningOfWeek={this.props.week.beginning}
        endOfWeek={this.props.week.end}
      />;
    });

    return (
      <View style={styles.container}>
        {dates}
        <View style={styles.scrollWrapper}>
          <ScrollView
            style={styles.drugBarWrapper}
            contentInset={{ bottom: 50 }}
          >
            {drugBars}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  state.drugInfoReducer.drugInfo.sort((a, b) => a.startDate - b.startDate);
  const drugInfoTest = getRowsFromDrugInfo(state.drugInfoReducer.drugInfo);
  return {
    currentMonth: state.timelineReducer.currentDay.month(),
    drugInfo: state.drugInfoReducer.drugInfo,
    drugInfoTest,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarWeek);
