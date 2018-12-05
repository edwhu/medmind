import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Swiper from "react-native-swiper";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import WeekIcon from "../../assets/01-Week.png";
// import CalendarWeek from '../../components/CalendarWeek/CalendarWeek';
import WeekSwiper from "./WeekSwiper/WeekSwiper";
import { MONTHS } from "../../constants/constants";
import styles from "./styles";
import moment from "moment";

class TimelineScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Timeline",

    drawerIcon: () => <Image source={WeekIcon} style={styles.imageStyle} />
  };

  static propTypes = {};

  static defaultProps = {
    calendarType: "week"
  };

  state = {
    title: `${MONTHS[this.props.currentMonth].toUpperCase()} ${
      this.props.currentYear
    }`
  };

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
