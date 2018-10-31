import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import { medmindBlue } from "../../constants/styles";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

class ReminderFormScreen extends Component {
  static navigationOptions = {
    drawerLabel: "New Reminder"
  };

  static propTypes = {};

  static defaultProps = {};

  state = {};

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Reminder"
  };

  openDrugListPage = () => {
    this.props.navigation.navigate("chooseDrugScreen", {
      showButton: true
    });
  };

  openRepeatPage = () => {
    this.props.navigation.navigate("repeatScreen", {
      showButton: true
    });
  };

  openSoundPage = () => {
    this.props.navigation.navigate("soundScreen", {
      showButton: true
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <View style={styles.row}>
          <Text style={styles.setting}>Drug</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.openDrugListPage()}>
            <Ionicons name='ios-arrow-forward' style={styles.arrowButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Repeat</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.openRepeatPage()}>
            <Ionicons name='ios-arrow-forward' style={styles.arrowButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Label</Text>
          <Text style={styles.entry}>500 mg</Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Sound</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.openSoundPage()}>
            <Ionicons name='ios-arrow-forward' style={styles.arrowButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Snooze</Text>
          <Switch onTintColor={medmindBlue} style={styles.switchButton} value={true}/>
        </View>
        <View style={styles.horizontalLine} />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
     drugs: state.drugInfoReducer.drugInfo,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderFormScreen);
