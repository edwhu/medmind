import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Swiper from "react-native-swiper";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
// import CalendarWeek from '../../components/CalendarWeek/CalendarWeek';
import WeekSwiper from "./WeekSwiper/WeekSwiper";
import { MONTHS } from "../../constants/constants";
import styles from "./styles";
import moment from "moment";

class TimelineScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Timeline"
  };

  static propTypes = {};

  static defaultProps = {
    calendarType: "week"
  };

  state = {
    title: `${MONTHS[this.props.currentMonth].toUpperCase()} ${
      this.props.currentYear
    }`,
    now: null,
    calendarData: null,
    currentPage: 0
  };

  componentWillMount() {
    const now = moment();
    const month = MONTHS[now.month()];
    const year = now.year();

    let calendarData;
    // populate the week before and after for the swiper
    if (this.props.calendarType === "week") {
      const beginning = now.clone().startOf("isoWeek"); // set to first date of this week per ISO, which is Mon
      const end = now.clone().endOf("isoWeek");
      const lastWeek = beginning.clone().subtract(7, "day");
      const nextWeek = end.clone().add(7, "day");
      calendarData = {
        0: {
          beginning,
          end
        },
        1: {
          beginning: end.clone().add(1, "day"),
          end: nextWeek
        },
        "-1": {
          beginning: lastWeek,
          end: beginning.clone().subtract(1, "day")
        }
      };
    }
    const pageTracker = Object.keys(calendarData).sort();
    const currentPage = pageTracker.indexOf("0");
    this.setState({
      // title: `${month.toUpperCase()} ${year}`,
      now,
      calendarData,
      currentPage,
      pageTracker
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.currentMonth && nextProps.currentYear) {
      this.setState({
        title: `${MONTHS[nextProps.currentMonth].toUpperCase()} ${
          nextProps.currentYear
        }`
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <WeekSwiper />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    currentMonth: state.timelineReducer.currentMonth,
    currentYear: state.timelineReducer.currentYear
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineScreen);
