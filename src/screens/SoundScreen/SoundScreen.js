import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import ListItem from "../../components/ListItem/ListItem";
import { medmindBlue } from "../../constants/styles";
import styles from "./styles";

export default class SoundScreen extends Component {

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

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <ListItem label='Beacon' />
        <ListItem label='Bulletin' />
        <ListItem label='By the Seaside' />
        <ListItem label='Circuit' />
        <ListItem label='Constellation' />
        <ListItem label='Cosmic' />
        <ListItem label='Crystals' />
        <ListItem label='Illuminate' />
        <ListItem label='Night Owl' />
        <ListItem label='Play Time' />
        <ListItem label='Radar' />
      </View>
    );
  }
}
