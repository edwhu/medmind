import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { addReminder, updateNewReminder } from "../../redux/actions/reminder";
import { connect } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import TimePicker from "../../components/TimePicker/TimePicker";
import { Ionicons } from "@expo/vector-icons";
import { medmindBlue } from "../../constants/styles";
import moment from "moment";
import styles from "./styles";

class ReminderFormScreen extends Component {
  static navigationOptions = {
    drawerLabel: "New Reminder"
  };

  static propTypes = {};

  static defaultProps = {};

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Reminder",
    snooze: false,
  };

  openDrugListPage = () => {
    this.props.navigation.navigate("chooseDrugScreen", {
      showButton: true,
    });
  };

  openRepeatPage = () => {
   this.props.navigation.navigate("repeatScreen", {
      showButton: true,
    });
  };

  openSoundPage = () => {
    this.props.navigation.navigate("soundScreen", {
      showButton: true,
    });
  };

  setRepeat = repeat => {
    this.setState({ repeat });
  };

  toggleSnooze = () => {
    this.setState({ snooze: !this.state.snooze });
  };

  getDrugName = drugId => {
    const drug = this.props.drugs.filter(function(drug) {
      return drug.id === drugId;
    });
    if (drug.length == 0) {
      return;
    }
    return drug[0].name;
  };

  // Saves reminder to redux store
  saveReminder = () => {
    if (this.navigation.props.updateOnly === true) {
      // only call this.props.updateReminder()
      // must change the reminder in the list to match
      // this.state.newReminder and then set newReminder
      // to be defaultReminder
    }
    else {
      // call this.props.addReminder
    }
    const drug = this.getDrugId(this.state.drug);
    if (drug.length == 0) {
      return;
    }
    if (typeof this.props.newReminder.time === "undefined") {
      this.props.updateNewReminder("time", moment());
    }
    if (typeof this.props.newReminder.repeat !== "undefined" && this.props.newReminder.repeat[0] === "E") {
        const newRepeat = this.props.newReminder.repeat.split(" ")[1];
        this.props.updateNewReminder("repeat", newRepeat);
    }
    this.props.addReminder();
    this.props.navigation.goBack();
  };

  render() {
    const { newReminder, updateNewReminder, addReminder, drugs } = this.props;
    const arrowButton = (
      <Ionicons name="ios-arrow-forward" style={styles.arrowButton} />
    );
    const soundText = (
      <Text style={styles.selectedSetting}>{newReminder.sound}</Text>
    );
    const repeatText = (
      <Text style={styles.selectedSetting}>{newReminder.repeat}</Text>
    );
    const drugText = (
      <Text style={styles.selectedSetting}>{this.getDrugName(newReminder.drugId)}</Text>
    );
    return (
      <View style={styles.container}>
        <TimePicker
          header="Time"
          setDate={time => updateNewReminder("time", time)}
        />
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Drug</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openDrugListPage()}
          >
            {newReminder.drugId ? drugText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Repeat</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openRepeatPage()}
          >
            {newReminder.repeat ? repeatText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Dosage</Text>
          <Text style={styles.entry}>
            {newReminder.dosage ? newReminder.dosage : null}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Sound</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openSoundPage()}
          >
            {newReminder.sound ? soundText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Snooze</Text>
          <Switch
            onTintColor={medmindBlue}
            style={styles.switchButton}
            onValueChange={() => this.toggleSnooze()}
            value={this.state.snooze}
          />
        </View>
        <View style={styles.horizontalLine} />
        <TouchableOpacity onPress={() => this.saveReminder()}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    drugs: state.drugInfoReducer.drugInfo,
    newReminder: state.remindersReducer.newReminder,
  };
}

const mapDispatchToProps = dispatch => ({
  addReminder: bindActionCreators(addReminder, dispatch),
  updateNewReminder: bindActionCreators(updateNewReminder, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderFormScreen);
