import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import styles from './styles';
import { DAYS } from '../../constants/constants';
import DrugBar from '../DrugBar/DrugBar';

class CalendarWeek extends Component {
  static navigationOptions = {

  };

  static propTypes = {

  };

  static defaultProps = {
    drugInfo: [
      {
        label: 'Tylenol',
        startDate: moment().subtract(3, 'days'),
        endDate: moment(),
      },
      {
        label: 'Methamphetamine fkdsal;f kasd;lfkapowe',
        startDate: moment().subtract(7, 'days'),
        endDate: moment(),
      },
      {
        label: 'Aspirin',
        startDate: moment().add(3, 'days'),
        endDate: moment().add(7, 'days'),
      },
      {
        label: 'Antihistamine',
        startDate: moment(),
        endDate: moment().add(2, 'days'),
      },
      {
        label: 'DRUG 5',
        startDate: moment().subtract(7, 'days'),
        endDate: moment().endOf('isoWeek'),
      },
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
        startDate: moment().add(7, 'days'),
        endDate: moment().add(10, 'days'),
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
    console.log("Today:", now);

    const theWeek = [];
    const beginning = now.clone().startOf('isoWeek'); // set to first date of this week per ISO, which is Mon
    const end = now.clone().endOf('isoWeek');
    now.startOf('isoWeek');
    // construct week
    for (let i = 0; i < 7; i++) {
      theWeek.push(now.date());
      now.add(1, 'day');
    }

    console.log("week", theWeek);
    this.setState({
      dateOfMonth,
      theWeek,
      beginning,
      end,
    });
  };

  _mapDates = () => {
    return this.state.theWeek.map((day, index) => {
      const isToday = this.state.dateOfMonth === day;
      const dayText = DAYS[index] ? DAYS[index] : '';

      return (
        <View style={[styles.dayColumn, { borderRightWidth: index === 6 ? 0 : 1 }]} key={ day + index }>
          <View style={styles.date}>
            <Text style={[styles.dayNumberText, { color: isToday ? '#4185F5' : 'black', fontWeight: isToday ? '600' : '400' }]}>{ day }</Text>
            <Text style={[styles.dayText, { color: isToday ? '#4185F5' : 'black', fontWeight: isToday ? '700' : '400' }]}>{ dayText }</Text>
          </View>
        </View>
      );
    });
  };

  render() {
    const dates = this._mapDates();

    const drugBars = this.props.drugInfo.map((drug, index) => {
      const color = this.props.drugColors[this.props.drugColors.length - index % 4 - 1];
      return (<DrugBar drugInfo={drug} backgroundColor={color} beginningOfWeek={this.state.beginning} endOfWeek={this.state.end} key={index} />);
    });

    return (
      <View style={styles.container}>
        { dates }
        <View style={styles.scrollWrapper} >
          <ScrollView style={styles.drugBarWrapper} contentInset={{bottom: 50}} >
            {drugBars}
          </ScrollView>
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