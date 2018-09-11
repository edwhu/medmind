import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Extrenal Packages
import Swiper from "react-native-swiper";
import moment from "moment";
// Local
import CalendarWeek from "../../../components/CalendarWeek/CalendarWeek";
import styles from "./styles";
import {
  updateMonth,
  updateYear,
  updateCurrentWeek,
  getPreviousWeek,
  getNextWeek
} from "../../../redux/actions/calendar";

class WeekSwiper extends Component {
  static navigationOptions = {};

  static propTypes = {
  };

  static defaultProps = {
  };

  state = {
  };


  componentDidUpdate(prevProps) {
    if (
      this.props.weeks[this.props.currentWeek].beginning.month() !==
      prevProps.currentMonth
    ) {
      this.props.updateMonth(
        this.props.weeks[this.props.currentWeek].beginning.month()
      );
    }
    if (
      this.props.weeks[this.props.currentWeek].beginning.year() !==
      prevProps.currentYear
    ) {
      this.props.updateYear(
        this.props.weeks[this.props.currentWeek].beginning.year()
      );
    }
  }

  _renderWeek = () => {
    return this.props.pageTracker.map((weekKey, index) => {
      return <CalendarWeek week={this.props.weeks[weekKey]} key={index} />;
    });
  };

  _getNewWeek = index => {
    if (index === 0) {
      // it is the edge week in the past, fetch the previous week
      const week = parseInt(this.props.currentWeek) - 1;
      this.props.getPreviousWeek(
        this.props.weeks[week],
        this.props.pageTracker,
        index
      );
    } else if (index === this.props.pageTracker.length - 1) {
      // it is the edge week in the future, fetch the next week
      const week = parseInt(this.props.currentWeek) + 1;
      this.props.getNextWeek(
        this.props.weeks[week],
        this.props.pageTracker,
        index
      );
    } else {
      this.props.updateCurrentWeek(this.props.pageTracker[index]);
      return;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.calendarSwiper}
          key={Object.keys(this.props.weeks).length}
          onIndexChanged={index => this._getNewWeek(index)}
          index={this.props.pageTracker.indexOf(this.props.currentWeek)}
          horizontal={true}
          loop={false}
          showsButtons={false}
          showsPagination={false}
        >
          {this._renderWeek()}
        </Swiper>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    currentMonth: state.timelineReducer.currentMonth,
    currentYear: state.timelineReducer.currentYear,
    weeks: state.timelineReducer.weeks,
    pageTracker: state.timelineReducer.pageTracker,
    currentWeek: state.timelineReducer.currentWeek
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateMonth,
      updateYear,
      updateCurrentWeek,
      getPreviousWeek,
      getNextWeek
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekSwiper);
