import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { addReminder } from "../../redux/actions/reminder";
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
    repeatIntervalCount: 1,
    repeatInterval: 'weeks',
    weekdays: [false, false, false, false, false, false, false],
    occurence: 'never',
    endDate: "MM/DD",
    endOccurenceCount: 1,
  };

  openDrugListPage = () => {
    this.props.navigation.navigate("chooseDrugScreen", {
      showButton: true,
    });
  };

  openRepeatPage = () => {
    this.props.navigation.navigate("repeatScreen", {
      showButton: true,
      // returnRepeat: this.setRepeat.bind(this),
      // returnWeekdays: this.setWeekdays.bind(this),
      // returnOccurence: this.setOccurence.bind(this),
      // returnInterval: this.setInterval.bind(this),
      // selectedRepeat: this.state.repeat
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
      return drug.id == drugId;
    });
    if (drug.length == 0) {
      return;
    }
    return drug[0].name;
  };

  // Saves reminder to redux store
  saveReminder = () => {
    // const drug = this.getDrugId(this.state.drug);
    // if (drug.length == 0) {
    //   return;
    // }
    // if (typeof this.state.startDate == "undefined") {
    //   this.state.startDate = moment();
    // }
    // const newReminder = {
    //   drugId: drug[0].id,
    //   dosage: drug[0].dosage,
    //   sound: this.state.sound,
    //   repeat: this.state.repeat,
    //   time: this.state.startDate,
    //   snooze: this.state.snooze
    // };
    // console.log(newReminder);
    //this.props.addReminder(newReminder);
    this.props.addReminder();
    this.props.navigation.goBack();
  };

  render() {
    const arrowButton = (
      <Ionicons name="ios-arrow-forward" style={styles.arrowButton} />
    );
    const soundText = (
      <Text style={styles.selectedSetting}>{this.props.newReminder.sound}</Text>
    );
    const repeatText = (
      <Text style={styles.selectedSetting}>{this.props.newReminder.repeat}</Text>
    );
    const drugText = (
      <Text style={styles.selectedSetting}>{this.getDrugName(this.props.newReminder.drugId)}</Text>
    );
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <TimePicker
          header="Time"
          setDate={startDate => this.setState({ startDate })}
        />
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Drug</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openDrugListPage()}
          >
            {this.props.newReminder.drugId ? drugText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Repeat</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openRepeatPage()}
          >
            {this.props.newReminder.repeat ? repeatText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Dosage</Text>
          <Text style={styles.entry}>
            {this.props.newReminder.dosage ? this.state.dosage : null}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Sound</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openSoundPage()}
          >
            {this.props.newReminder.sound ? soundText : arrowButton}
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
  addReminder: bindActionCreators(addReminder, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderFormScreen);
