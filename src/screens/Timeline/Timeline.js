import React, { Component } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { View, ScrollView, StyleSheet, Text, Image, } from "react-native";
=======
import { View, Image } from "react-native";
>>>>>>> 796bc2d8a4751a2af148e2dcfe4123648b718019
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import WeekIcon from "../../assets/01-Week.png";
import WeekSwiper from "./WeekSwiper/WeekSwiper";
import { MONTHS } from "../../constants/constants";
import styles from "./styles";
<<<<<<< HEAD
import moment from "moment";
import RoundedButton from "../../components/RoundedButton/RoundedButton";
=======
>>>>>>> 796bc2d8a4751a2af148e2dcfe4123648b718019

class TimelineScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Timeline",
    drawerIcon: () => <Image source={WeekIcon} style={styles.imageStyle} />
  };

  static propTypes = {};

  static defaultProps = {
    calendarType: "week"
  };

  render() {
<<<<<<< HEAD
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <WeekSwiper navigation = {navigation}/>
=======
    const { currentMonth, currentYear } = this.props;
    const title = `${MONTHS[currentMonth].toUpperCase()} ${currentYear}`;
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={title} />
        <WeekSwiper />
>>>>>>> 796bc2d8a4751a2af148e2dcfe4123648b718019
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const { currentMonth, currentYear } = state.timelineReducer;
  return { currentMonth, currentYear };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineScreen);
