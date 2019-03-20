import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import EmptyDrugIcon from "../../assets/empty-drug.png";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import OptionButton from "../../components/OptionButton/OptionButton";
import { medmindBlue } from "../../constants/styles";
import styles from "./styles";

export default class EmptyDrugScreen extends Component {
  static propTypes = { 
    cameraOnPress: PropTypes.func.isRequired,
    drugOnPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View>
        <View style={styles.iconContainer}>
          <Image source={EmptyDrugIcon} style={styles.icon} />
          <Text style={styles.iconText}>Empty Pillbox</Text>
          <Text style={styles.iconTextBody}>
            There are no drugs right now.{"\n"}
            Use the <Text style={styles.smallPlus}> + </Text> 
            button to add drugs.
          </Text>
        </View>
        <OptionButton
         cameraOnPress={this.props.cameraOnPress} 
         drugOnPress={this.props.drugOnPress} />
      </View>
    );
  }
}