import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import ListItem from "../../components/ListItem/ListItem";
import { medmindBlue } from "../../constants/styles";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default class RepeatScreen extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  componentWillMount() {
    this.setState({
      repeat: this.props.navigation.state.params.selectedRepeat
    });
  }

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
      returnWeekdays: this.setWeekdays.bind(this),
      returnOccurence: this.setOccurence.bind(this),
      returnInterval: this.setInterval.bind(this)
    });
  };

  setRepeat = repeat => {
    if (this.state.repeat != repeat) {
      this.setState({ repeat: repeat });
      this.props.navigation.state.params.returnRepeat(repeat);
    }
  };

  setWeekdays = weekdays => {
    if (this.state.weekdays != weekdays) {
      this.setState({ weekdays: weekdays });
      console.log("WEEKDAYS!!!!!!!!!!!!!: " + weekdays);
      this.props.navigation.state.params.returnWeekdays(weekdays);
    }
  };

  setOccurence = occurence => {
    if (this.state.occurence != occurence) {
      this.setState({ occurence: occurence });
      console.log("OCCURENCE!!!!!!!!!!!!!!!" + occurence);
      this.props.navigation.state.params.returnOccurence(occurence);
    }
  };

  setInterval = interval => {
    if (this.state.interval != interval) {
      this.setState({ interval: interval });
      console.log("INTERVAL__________________" + interval);
      this.props.navigation.state.params.returnInterval(interval);
    }
  };

  checkSelected = repeat => this.state.repeat == repeat;

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <ListItem
          label="Does not repeat"
          onPress={() => this.setRepeat("Does not repeat")}
          selected={this.checkSelected("Does not repeat")}
        />
        <ListItem
          label="Every day"
          onPress={() => this.setRepeat("Every day")}
          selected={this.checkSelected("Every day")}
        />
        <ListItem
          label="Every week"
          onPress={() => this.setRepeat("Every week")}
          selected={this.checkSelected("Every week")}
        />
        <ListItem
          label="Every month"
          onPress={() => this.setRepeat("Every month")}
          selected={this.checkSelected("Every month")}
        />
        <ListItem
          label="Every year"
          onPress={() => this.setRepeat("Every year")}
          selected={this.checkSelected("Every year")}
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
