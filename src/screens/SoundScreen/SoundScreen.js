import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import ListItem from "../../components/ListItem/ListItem";
import { medmindBlue } from "../../constants/styles";
import { testSounds } from "../../constants/constants";
import styles from "./styles";

export default class SoundScreen extends Component {

  static propTypes = {};

  static defaultProps = {};

  state = {};

  componentWillMount() {
    this.setState({sound: this.props.navigation.state.params.selectedSound});
  }

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Sound"
  };

  setSound = (sound) => {
    if (this.state.sound != sound) {
      this.setState({sound: sound});
      this.props.navigation.state.params.returnSound(sound);
    }
  };

  checkSelected = (sound) => {
    return this.state.sound == sound;
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
        <ScreenHeader {...this.props} title={this.state.title} />
        <ScrollView>
        {soundList}
        </ScrollView>
      </View>
    );
  }
}
