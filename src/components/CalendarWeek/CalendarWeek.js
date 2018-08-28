import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from './styles';
import { medmindBlue } from '../../constants/styles';
import DrugBar from '../DrugBar/DrugBar';

class CalendarWeek extends Component {
  static navigationOptions = {

  };

  static propTypes = {

  };

  static defaultProps = {
    drugInfo: [
      {
        label: 'DRUGGGS',
        startDate: moment().subtract(3, 'days'),
        endDate: moment(),
      },
      {
        label: 'DRUGGGS 2',
        startDate: moment().subtract(7, 'days'),
        endDate: moment(),
      },
      {
        label: 'DRUGGGS 3',
        startDate: moment().add(3, 'days'),
        endDate: moment().add(7, 'days'),
      },
      {
        label: 'DRUGGGS 4',
        startDate: moment(),
        endDate: moment().add(2, 'days'),
      },
      {
        label: 'DRUG 5',
        startDate: moment().subtract(7, 'days'),
        endDate: moment().endOf('isoWeek'),
      },
    ],
    drugColors: ['blue', 'red', 'green', 'orange'],
    screenWidth: Dimensions.get('window'),
  };

  state = {
    dateOfMonth: 1,
    theWeek: [],
    beginning: null,
    end: null,
  };

  componentWillMount() {
    const now = moment();
    const dateOfMonth = now.date(); // 1-31

    const theWeek = [];
    const beginning = now.clone().startOf('isoWeek'); // set to first dat of this week per ISO, which is Mon
    const end = now.clone().endOf('isoWeek');
    let day;
    // construct week
    for (let i = 0; i < 7; i++) {
      theWeek.push(now.date());
      now.add(1, 'day');
    }

    this.setState({
      dateOfMonth,
      theWeek,
      beginning,
      end,
    });
  };

  render() {
    const dates = this.state.theWeek.map((day, index) => {
      let dayText;
      const isToday = this.state.dateOfMonth === day;
      switch (index) {
        case 0: 
          dayText = 'Mon';
          break;
        case 1:
          dayText = 'Tue';
          break;
        case 2:
          dayText = 'Wed';
          break;
        case 3:
          dayText = 'Thu';
          break;
        case 4:
          dayText = 'Fri';
          break;
        case 5:
          dayText = 'Sat';
          break;
        case 6:
          dayText = 'Sun';
          break;
        default:
          console.error('Issue getting the correct day.');
          break;
      }
      return (
        <View style={[styles.dayColumn, { borderRightWidth: index === 6 ? 0 : 1 }]} key={ day + index }>
          <View style={styles.date}>
            <Text style={[styles.dayNumberText, { color: isToday ? '#4185F5' : 'black', fontWeight: isToday ? '600' : '400' }]}>{ day }</Text>
            <Text style={[styles.dayText, { color: isToday ? '#4185F5' : 'black', fontWeight: isToday ? '700' : '400' }]}>{ dayText }</Text>
          </View>
        </View>
      );
    });

    const drugBars = this.props.drugInfo.map((drug, index) => {
      const color = this.props.drugColors[this.props.drugColors.length - index - 1];
      return (<DrugBar drugInfo={drug} backgroundColor={color} beginningOfWeek={this.state.beginning} endOfWeek={this.state.end} key={index} />);
    });

    return (
      <View style={styles.container}>
        { dates }
        <View style={styles.drugBarWrapper}>
          {/* <DrugBar drugInfo={this.props.drugInfo} backgroundColor={'blue'} beginningOfWeek={this.state.beginning} endOfWeek={this.state.end} /> */}
          {drugBars}
        </View>
      </View>
    );
  }
};

function mapStateToProps(state, props) {
  return {

  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {

    }, 
    dispatch
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(CalendarWeek);