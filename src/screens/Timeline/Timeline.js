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
    drawerLabel: 'Timeline',
  };

  static propTypes = {
  };

  static defaultProps = {
    calendarType: 'week',
  };

  state = {
    title: this.props.title || 'April 2018',
    now: null,
    calendarData: null,
    currentPage: 0,
  };

  componentWillMount() {
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
    return Object.keys(this.state.calendarData).sort().map((weekKey, index) => {
      return <CalendarWeek week={this.state.calendarData[weekKey]} key={index} />
    });
  };

  _getNewWeek = (index) => {
    console.log('New index with swiper:', index);
    if (index === 0) {
      // it is the edge week in the past, fetch the previous week

    } else if (index === this.state.pageTracker.length) {
      // it is the edge week in the future, fetch the next week

    } else {
      return;
    }
    // if (!this.state.calendarData[index - 1]) {
    //   // it is the edge week in the past, fetch the previous week
    //   const newIndex = index - 1;
    //   const beginning = this.state.calendarData[index].beginning.clone().subtract(7, 'day');
    //   const end = this.state.calendarData[index].beginning.clone().subtract(1, 'day');
    // } else if (!this.state.calendarData[index + 1]) {
    //   // it is the edge week in the future, fetch the next week
    //   const beginning = this.state.calendarData[index].end.clone().add(1, 'day');
    //   const end = this.state.calendarData[index].end.clone().add(7, 'day');
    // } else {
    //   return;
    // }
    // this.setState({
    //   calendarData: 
    //     Object.assign(
    //       {},
    //       this.state.calendarData,
    //       {
    //         [newIndex]: {
    //           beginning,
    //           end,
    //         },
    //       },
    //     ),
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
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
        {/* <ScrollView
          style={styles.calendarSwiper}
          pagingEnabled={true}
          horizontal={true}
        > */}
          { this._renderWeek() }
          {/* <CalendarWeek week={this.state.calendarData[-1]} /> */}
          {/* <CalendarWeek week={this.state.calendarData[0]} />
          <CalendarWeek week={this.state.calendarData[1]} /> */}

        {/* </ScrollView> */}
          {/* <CalendarWeek week={this.state.calendarData[0]} /> */}
        </Swiper>
      </View>
    );
  };
}

