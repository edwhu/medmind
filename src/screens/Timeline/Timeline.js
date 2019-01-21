import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import WeekIcon from "../../assets/01-Week.png";
import WeekSwiper from "./WeekSwiper/WeekSwiper";
import { MONTHS } from "../../constants/constants";
import styles from "./styles";

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
    const { currentMonth, currentYear } = this.props;
    const title = `${MONTHS[currentMonth].toUpperCase()} ${currentYear}`;
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={title} />
        <WeekSwiper />
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
