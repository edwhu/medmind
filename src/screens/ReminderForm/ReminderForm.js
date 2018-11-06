import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import TimePicker from "../../components/TimePicker/TimePicker";
import { Ionicons } from "@expo/vector-icons";
import { medmindBlue } from "../../constants/styles";
import styles from "./styles";

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
    title: this.props.title || "Reminder",
    snooze: false,
  };

  openDrugListPage = () => {
    this.props.navigation.navigate("chooseDrugScreen", {
      showButton: true,
      returnDrug: this.setDrug.bind(this),
      selectedDrug: this.state.drug,
    });
  };

  openRepeatPage = () => {
    this.props.navigation.navigate("repeatScreen", {
      showButton: true,
      returnRepeat: this.setRepeat.bind(this),
      selectedRepeat: this.state.repeat,
    });
  };

  openSoundPage = () => {
    this.props.navigation.navigate("soundScreen", {
      showButton: true,
      returnSound: this.setSound.bind(this),
      selectedSound: this.state.sound,
    });
  };

  setDrug = (drug, dosage) => {
    this.setState({drug: drug, dosage: dosage});
  };

  setSound = (sound) => {
    this.setState({sound: sound});
  };

  setRepeat = (repeat) => {
    this.setState({repeat: repeat});
  };

  toggleSnooze = () => {
    this.setState({snooze: !this.state.snooze})
  };

  saveReminder = () => {

  };

  render() {
    const arrowButton = <Ionicons name='ios-arrow-forward' style={styles.arrowButton} />;
    const soundText = <Text style={styles.selectedSetting}>{this.state.sound}</Text>;
    const repeatText = <Text style={styles.selectedSetting}>{this.state.repeat}</Text>;
    const drugText = <Text style={styles.selectedSetting}>{this.state.drug}</Text>;
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <TimePicker 
          header='Time'
          setDate={startDate => this.setState({startDate})} 
        />
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Drug</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.openDrugListPage()}>
            {this.state.drug ? drugText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Repeat</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.openRepeatPage()}>
            {this.state.repeat ? repeatText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Dosage</Text>
          <Text style={styles.entry}>{this.state.dosage ? this.state.dosage : null}</Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Sound</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.openSoundPage()}>
            {this.state.sound ? soundText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Snooze</Text>
          <Switch 
            onTintColor={medmindBlue} 
            style={styles.switchButton} 
            onValueChange = {() => this.toggleSnooze()}
            value = {this.state.snooze}
          />
        </View>
        <View style={styles.horizontalLine} />
        <TouchableOpacity onPress={() => this.saveReminder()}><Text>Save</Text></TouchableOpacity>
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
