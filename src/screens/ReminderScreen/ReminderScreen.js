import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, ScrollView, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateReminder } from "../../redux/actions/reminder";
import StatusBarBackground from "../../components/StatusBarBackground/StatusBarBackground";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import { medmindBlue } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

class ReminderScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Reminders"
  };

  static propTypes = {};

  static defaultProps = {};

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Reminder"
  };

  openReminderFormPage = () => {
    this.props.navigation.navigate("reminderFormScreen");
  };

  getDrugById = id => {
    return this.props.drugs.filter(function(drug) {
      return drug.id == id;
    });
  };

  getDrugId = drugName => {
    const drugId = this.props.drugs.filter(function(drug) {
      return drug.name == drugName;
    });
    return drugId[0].id;
  };

  groupReminders = () => {
    var dict = {};
    this.props.reminders.forEach(item => {
      var drug = this.getDrugById(item.drugId);
      if (drug.length == 0) {
        return;
      }
      if (!dict[drug[0].name]) {
        dict[drug[0].name] = [];
      }
      dict[drug[0].name].push(item);
    });
    return dict;
  };

  toggleSnooze = id => {
    const reminders = this.props.reminders.slice(0);
    reminders.forEach(item => {
      if (item.id == id) {
        item.snooze = !item.snooze;
      }
    });
    this.props.updateReminder(reminders);
  };

  toggleDrugSnooze = drugName => {
    const drugId = this.getDrugId(drugName);
    const reminders = this.props.reminders.slice(0);
    reminders.forEach(item => {
      if (item.drugId == drugId) {
        item.snoozeDrug = !item.snoozeDrug;
        item.snooze = item.snoozeDrug;
      }
    });
    this.props.updateReminder(reminders);
  }

  getSnooze = drugName => {
    const drugId = this.getDrugId(drugName);
    const reminder = this.props.reminders.find(r => r.drugId === drugId);
    return reminder.snoozeDrug;
  }

  displayRepeat = reminder => {
    switch (reminder.repeat) {
      case "week":
        console.log(reminder.time);
        return ", every " + reminder.time.format("dddd");
      case "day":
        return ", every day";
      case "hour":
        return ", every hour";
      case "month":
        return ", monthly";
      case "year":
        return ", yearly";
      default:
        return "";
    }
  };

  render() {
    const dict = this.groupReminders();
    const reminders = Object.keys(dict).map(drug => {
      const drugReminders = dict[drug];
      const reminderList = drugReminders.map(reminder => {
        return (
          <View key={reminder.id}>
            <View style={styles.horizontalLine} />
            <View style={styles.reminder}>
              <View style={styles.info}>
                <View style={styles.timeContainer}>
                  <Text style={styles.timeLabel}>
                    {reminder.time.format("h:mm")}{" "}
                  </Text>
                  <Text style={styles.timeMidday}>
                    {reminder.time.format("A")}
                  </Text>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.details}> {reminder.dosage}</Text>
                  <Text style={styles.details}>
                    {this.displayRepeat(reminder)}
                  </Text>
                </View>
              </View>
              <Switch 
              onTintColor={medmindBlue} 
              style={styles.switchButton} 
              onValueChange = {() => this.toggleSnooze(reminder.id)}
              value={reminder.snooze}
              disabled={!reminder.snoozeDrug}
              />
            </View>
            <View style={styles.horizontalLine} />
          </View>
        );
      });
      return (
        <View key={drug}>
          <View style={styles.drug}>
            <Text style={styles.drugName}>{drug}</Text>
            <Switch
              onTintColor={medmindBlue}
              style={styles.switchButton}
              onValueChange = {() => this.toggleDrugSnooze(drug)}
              value={this.getSnooze(drug)}
            />
          </View>
          {reminderList}
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <ScrollView>
        {reminders}
        </ScrollView>
        <TouchableOpacity style={styles.plusButton} onPress={() => this.openReminderFormPage()}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    reminders: state.remindersReducer.reminders,
    drugs: state.drugInfoReducer.drugInfo
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateReminder: bindActionCreators(updateReminder, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderScreen);
