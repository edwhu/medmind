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

  checkSelected = repeat => {
    return this.props.newReminder.repeat === repeat;
  };

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
              onPress={this.openCustomIntervalPage}
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
