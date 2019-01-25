import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateNewReminder } from "../../redux/actions/reminder";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import ListItem from "../../components/ListItem/ListItem";
import { medmindBlue } from "../../constants/styles";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

class RepeatScreen extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Repeat"
  };

  openCustomIntervalPage = () => {
    this.setRepeat("Custom");
    this.props.navigation.navigate("customIntervalScreen", {
      showButton: true,
    });
  };

  setRepeat = repeat => {
    if (this.state.repeat != repeat) {
      this.props.updateNewReminder("repeat", repeat);
    }
  };

  // setWeekdays = weekdays => {
  //   if (this.state.weekdays != weekdays) {
  //     this.setState({ weekdays: weekdays });
  //     console.log("WEEKDAYS!!!!!!!!!!!!!: " + weekdays);
  //     this.props.navigation.state.params.returnWeekdays(weekdays);
  //   }
  // };

  // setOccurence = occurence => {
  //   if (this.state.occurence != occurence) {
  //     this.setState({ occurence: occurence });
  //     console.log("OCCURENCE!!!!!!!!!!!!!!!" + occurence);
  //     this.props.navigation.state.params.returnOccurence(occurence);
  //   }
  // };

  // setInterval = interval => {
  //   if (this.state.interval != interval) {
  //     this.setState({ interval: interval });
  //     console.log("INTERVAL__________________" + interval);
  //     this.props.navigation.state.params.returnInterval(interval);
  //   }
  // };

  checkSelected = repeat => {

    return this.props.newReminder.repeat == repeat;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <ListItem
          label="Does not repeat"
          onPress={() => this.setRepeat("does not repeat")}
          selected={this.checkSelected("does not repeat")}
        />
        <ListItem
          label="Every day"
          onPress={() => this.setRepeat("every day")}
          selected={this.checkSelected("every day")}
        />
        <ListItem
          label="Every week"
          onPress={() => this.setRepeat("every week")}
          selected={this.checkSelected("every week")}
        />
        <ListItem
          label="Every month"
          onPress={() => this.setRepeat("every month")}
          selected={this.checkSelected("every month")}
        />
        <ListItem
          label="Every year"
          onPress={() => this.setRepeat("every year")}
          selected={this.checkSelected("every year")}
        />
        <TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.setting}>Custom</Text>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.openCustomIntervalPage()}
            >
              <Ionicons name="ios-arrow-forward" style={styles.arrowButton} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    newReminder: state.remindersReducer.newReminder,
  };
}

const mapDispatchToProps = dispatch => ({
  updateNewReminder: bindActionCreators(updateNewReminder, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepeatScreen);
