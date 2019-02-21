import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Switch,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateReminder, setNewReminder, deleteReminder, setUpdateFlag } from "../../redux/actions/reminder";
import ReminderIcon from "../../assets/03-Notifs.png";
import StatusBarBackground from "../../components/StatusBarBackground/StatusBarBackground";
import EditButton from "../../components/EditButton/EditButton";
import MinusButton from "../../components/MinusButton/MinusButton";
import { medmindBlue, drawerIconStyle } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

class ReminderScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Reminders",
    drawerIcon: () => <Image source={ReminderIcon} style={styles.imageStyle} />
  };

  static propTypes = {};

  static defaultProps = {};

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Reminder",
    editMode: false
  };

  openReminderFormPage = () => {
    this.props.setUpdateFlag(false);
    this.state.editMode = false;
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
    // const reminders = this.props.reminders.map(item => {
    //   if (item.id === id) {
    //     return {
    //       ...item,
    //       snooze: !item.snooze
    //     };
    //   } else {
    //     return item;
    //   }
    // });
    const reminder = this.props.reminders.reduce((acc, currentValue) => {
      if (currentValue.id === id) {
        return {
          ...currentValue,
          snooze: !currentValue.snooze
        };
      }
    });
    console.log(reminder);
    this.props.updateReminder(reminder);
  };

  toggleDrugSnooze = drugName => {
    const drugId = this.getDrugId(drugName);
    const reminders = this.props.reminders.map(item => {
      if (item.drugId === drugId) {
        return {
          ...item,
          snooze: !item.snoozeDrug,
          snoozeDrug: !item.snoozeDrug
        };
      } else {
        return item;
      }
    });
    this.props.updateReminder(reminders);
  };

  getSnooze = drugName => {
    const drugId = this.getDrugId(drugName);
    const reminder = this.props.reminders.find(r => r.drugId === drugId);
    return reminder.snoozeDrug;
  };

  displayRepeat = reminder => {
    switch (reminder.repeat) {
      case "week":
        return ", every " + reminder.time.format("dddd");
      case "Custom":
        if (reminder.repeatInterval === "week") {
          return ", custom";
        }
        else {
          return `, every ${reminder.repeatIntervalCount} ${reminder.repeatInterval}(s)`;
        }
      default:
        return ", every " + reminder.repeat;
    }
  };

  onEditPress = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  openReminderFormPageForEdit = (id) => {
    const reminder = this.props.reminders.filter(item => {
      return item.id === id;
    });
    this.props.setNewReminder(reminder[0]);
    this.props.setUpdateFlag(true);
    this.props.navigation.navigate("reminderFormScreen");
  };

  deleteReminder = (reminderId) => {
    this.props.deleteReminder("id", reminderId);
  };

  deleteRemindersByDrug = (drugName) => {
    const drugId = this.getDrugId(drugName);
    this.props.deleteReminder("drugId", drugId);
  };

  render() {
    const arrowButton = (
      <Ionicons name="ios-arrow-forward" style={styles.arrowButton} />
    );
    const dict = this.groupReminders();
    const reminders = Object.keys(dict).map(drug => {
      const switchDrug = (
        <Switch
          onTintColor={medmindBlue}
          style={styles.switchButton}
          onValueChange={() => this.toggleDrugSnooze(drug)}
          value={this.getSnooze(drug)}
        />
      );
      const drugReminders = dict[drug];
      const reminderList = drugReminders.map(reminder => {
        const switchReminder = (
          <Switch
            onTintColor={medmindBlue}
            style={styles.switchButton}
            onValueChange={() => this.toggleSnooze(reminder.id)}
            value={reminder.snooze}
            disabled={!reminder.snoozeDrug}
          />
        );
        return (
          <View key={reminder.id}>
            <View style={styles.horizontalLine} />
            <View style={styles.reminder}>
              {this.state.editMode ? <MinusButton onPress={(id) => this.deleteReminder(reminder.id)} /> : null}
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
              {this.state.editMode ?<EditButton onPress={(id) => this.openReminderFormPageForEdit(reminder.id)} /> : switchReminder}
            </View>
            <View style={styles.horizontalLine} />
          </View>
        );
      });
      return (
        <View key={drug}>
          <View style={styles.drug}>
            {this.state.editMode && <MinusButton onPress={(drugName) => this.deleteRemindersByDrug(drug)} />}
            <Text style={styles.drugName}>{drug}</Text>
            {switchDrug}
          </View>
          {reminderList}
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={this.onEditPress}>
            <Text>{this.state.editMode ? "Done" : "Edit"}</Text>
          </TouchableOpacity>
          {reminders}
        </ScrollView>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={this.openReminderFormPage}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    reminders: state.remindersReducer.reminders,
    newReminder: state.remindersReducer.newReminder,
    drugs: state.drugInfoReducer.drugInfo,
    updateOnly: state.remindersReducer.updateOnly,
  };
}

const mapDispatchToProps = dispatch => ({
  updateReminder: bindActionCreators(updateReminder, dispatch),
  deleteReminder: bindActionCreators(deleteReminder, dispatch),
  setNewReminder: bindActionCreators(setNewReminder, dispatch),
  setUpdateFlag: bindActionCreators(setUpdateFlag, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderScreen);
