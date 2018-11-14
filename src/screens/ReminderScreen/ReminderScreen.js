import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, ScrollView, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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

  state = {};

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

  displayRepeat = reminder => {
    switch (reminder.repeat) {
      case "week":
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
              value={reminder.snooze}
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
              value={true}
              style={styles.switchButton}
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

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderScreen);
