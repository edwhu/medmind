import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import CalendarWeek from '../../components/CalendarWeek/CalendarWeek';
import { MONTHS } from '../../constants/constants';
import styles from './styles';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';

export default class TimelineScreen extends Component {
  static navigationOptions = {
  };

  static propTypes = {
    weeks: PropTypes.objectOf(PropTypes.any),
  };

  static defaultProps = {
  };

  state = {
    now: null,
    calendarData: null,
    currentPage: 0,
    pageTracker: [], // array of weeks in the form of what the swiper expects
  };

  componentWillMount() {
    //TODO: work on dynamically populating new weeks as the user scrolls to edge pages.
    // chose to make a new component so Timeline can pass props down to the child component to trigger re-render
    const now = moment();
    const month = MONTHS[now.month()];
    const year = now.year();

    let calendarData;
    // populate the week before and after for the swiper
    if (this.props.calendarType === 'week') {
      const beginning = now.clone().startOf('isoWeek'); // set to first date of this week per ISO, which is Mon
      const end = now.clone().endOf('isoWeek');
      const lastWeek = beginning.clone().subtract(7, 'day');
      const nextWeek = end.clone().add(7, 'day');
      calendarData = {
        0: {
          beginning,
          end,
        },
        1: {
          beginning: end.clone().add(1, 'day'),
          end: nextWeek,
        },
        '-1': {
          beginning: lastWeek,
          end: beginning.clone().subtract(1, 'day'),
        },
      };
    }
    const pageTracker = Object.keys(calendarData).sort();
    const currentPage = pageTracker.indexOf('0');
    this.setState({
      title: `${month.toUpperCase()} ${year}`,
      now,
      calendarData,
      currentPage,
      pageTracker,
    });
  };

  _renderWeek = () => {
    // return Object.keys(this.state.calendarData).sort().map((weekKey, index) => {
    return this.state.pageTracker.map((weekKey, index) => {
      return <CalendarWeek week={this.state.calendarData[weekKey]} key={index} />
    });
  };

  _getNewWeek = (index) => {
    console.log('New index with swipers:', index);
    if (index === 0) {
      // it is the edge week in the past, fetch the previous week
      const week = this.state.calendarData[this.state.pageTracker[index]];
      const newIndex = this.state.pageTracker[index] - 1;
      const newWeek = {
        beginning: week.beginning.clone().subtract(7, 'day'),
        end: week.beginning.clone().subtract(1, 'day'),
      };
      const newPageTracker = this.state.pageTracker.slice(); // need to make a deep copy
      newPageTracker.unshift(newIndex);
    } else if (index === this.state.pageTracker.length - 1) {
      // it is the edge week in the future, fetch the next week
      const week = this.state.calendarData[this.state.pageTracker[index]];
      const newIndex = this.state.pageTracker[index] + 1;
      const newWeek = {
        beginning: week.end.clone().add(1, 'day'),
        end: week.end.clone().add(7, 'day'),
      };
      const newPageTracker = this.state.pageTracker.slice(); // need to make a deep copy
      newPageTracker.push(newIndex);
    } else {
      return;
    }
    this.setState({
      pageTracker: newPageTracker,
      calendarData: 
        Object.assign(
          {},
          this.state.calendarData,
          {
            [newIndex]: newWeek,
          },
        ),
    })
  };

  render() {
    return (
      <View>
        <Swiper
          style={styles.calendarSwiper}
          key={Object.keys(this.state.calendarData).length}
          onIndexChanged={(index) => this._getNewWeek(index)}
          index={this.state.currentPage}
          horizontal={true}
          loop={false}
          showsButtons={false}
          showsPagination={false}
        >

          { this._renderWeek() }

        </Swiper>
      </View>
    );
  };
}

