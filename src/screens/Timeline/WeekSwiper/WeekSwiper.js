import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Extrenal Packages
import Swiper from "react-native-swiper";
// Local
import CalendarWeek from "../../../components/CalendarWeek/CalendarWeek";
import RoundedButton from "../../../components/RoundedButton/RoundedButton";
import styles from "./styles";
import { updateWeek } from "../../../redux/actions/calendar";

class WeekSwiper extends Component {
  static navigationOptions = {};

  static propTypes = {};

  static defaultProps = {};

  // Given the beginning date of a week, returns an array
  // containing data for that week, the week before, and the
  // week after.
  _getSurroundingWeeks = middleWeekBegin => {
    const middleWeekEnd = middleWeekBegin.clone().endOf('isoWeek');
    const diffs = [-1, 0, 1]; // # of weeks different from this week
    return diffs.map(diff => ({
      beginning: middleWeekBegin.clone().add(diff, 'week'),
      end: middleWeekEnd.clone().add(diff, 'week'),
    }));
  };

  _onIndexChanged = index => {
    this.props.updateWeek(
      this.props.currentWeek.clone().add(index - 1, 'week'),
    );
  };

  onPlusButtonPress = () => {
    this.props.navigation.navigate("cameraScreen")
  }

  render() {
    const { currentWeek } = this.props;
    const weeks = this._getSurroundingWeeks(currentWeek);
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.calendarSwiper}
          onIndexChanged={this._onIndexChanged}
          key={currentWeek.toString()} // this prop is necessary for the component to reset its index to 1 each time
          index={1} // the current week will always be the middle one in this array
          loop={false}
          showsButtons={false}
          showsPagination={false}
        >
          {weeks.map(week => (
            <CalendarWeek week={week} key={week.beginning.toString()} />
          ))}
        </Swiper>
        <TouchableOpacity 
         style={styles.button}
         onPress={() => this.onPlusButtonPress()}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return state.timelineReducer;
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateWeek }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekSwiper);
