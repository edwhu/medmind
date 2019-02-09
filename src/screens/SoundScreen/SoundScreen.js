import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateNewReminder } from "../../redux/actions/reminder";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import ListItem from "../../components/ListItem/ListItem";
import { medmindBlue } from "../../constants/styles";
import { testSounds } from "../../constants/constants";
import styles from "./styles";

class SoundScreen extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Sound"
  };

  setSound = sound => {
    this.props.updateNewReminder("sound", sound);
  };

  checkSelected = sound => {
    return this.props.newReminder.sound == sound;
  };

  render() {
    soundList = testSounds.map(sound => {
      return (
        <ListItem
          key={sound}
          label={sound}
          onPress={() => this.setSound(sound)}
          selected={this.checkSelected(sound)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <ScrollView>{soundList}</ScrollView>
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
)(SoundScreen);
