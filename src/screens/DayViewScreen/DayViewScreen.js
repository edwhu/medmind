import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import styles from "./styles";
import DayIcon from "../../assets/00-Day.png";
import { ScrollView, FlatList } from "react-native";
import DrugItemInDayView from "../../components/DrugItemInDayView/DrugItemInDayView";
import EventInDayView from "../../components/EventInDayView/EventInDayView";
// import {asNeededDrugs, drugsByEvents, testRemindersUnsorted} from "../../constants/constants";
import { connect } from "react-redux";
import moment from "moment";


class DayViewScreen extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {};

  state = {};


  getDrug = (drugId) => {
    const drugs = this.props.drugs;
    let targetDrug = drugs.filter(drug => drug.id == drugId);
    if(targetDrug.length != 0){
      console.log("target drug:");
      console.log(targetDrug[0]);
      return targetDrug[0];
    }
    else 
      return null;
  }

  // TODO: This function must be completed to take the drugs by event and put it in the correct schema so that the components can use them
  organizeDrugsByEvent = (reminders) => {
    // Sort by time 
    reminders.sort((left, right) => left.time.diff(right.time));
    // Convert it into drugsByEvent schema
    let key = -1;
    let drugsByEvent = [];
    let currentTimeDict = {time: null, key: key, drugs: []};
    let currentTime = moment(); //null moment object
    reminders.forEach(reminder => {
      const drugId = reminder['drugId'];
      let reminderTime = reminder['time'];
      let reminderTimeString = reminder['time'].format("HH:mm");
      let currentTimeString = currentTime.format("HH:mm");
      if(currentTimeString != reminderTimeString){
        key++;
        currentTimeDict = {time: reminderTime, key: key, drugs: []};
        // Find corresponding drug given drugId
        let drug = this.getDrug(drugId);
        if(drug !== null){
          currentTimeDict['drugs'].push(drug);
        }
        currentTime = reminder['time'];
        drugsByEvent.push(currentTimeDict);

      }
      else {
        let drug = this.getDrug(drugId);
        if(drug !== null){
          currentTimeDict['drugs'].push(drug);
        }
      }

      console.log("Printing drugsbyEvent")
      console.log(drugsByEvent);

    });
    return drugsByEvent;
  };

  render() {
    const reminders = this.props.reminders;
    const drugs = this.props.drugs;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>As Needed</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={drugs}
            renderItem={({ item }) => <DrugItemInDayView drug={item}/>
          }
            keyExtractor={(item, index) => item.id.toString()}
          />
          <View style={styles.dayVerticalListWrapper}>
            <FlatList
              data={this.organizeDrugsByEvent(reminders)}
              // data={drugsByEvents}
              renderItem={({ item }) => <EventInDayView event={item} navigation={this.props.navigation}/>}
              style={styles.dayVerticalList}
              keyExtractor={(item, index) => item.key.toString()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state, props){
  return {
    reminders: state.remindersReducer.reminders,
    drugs: state.drugInfoReducer.drugInfo 
  };
}

export default connect(
  mapStateToProps,
  null
)(DayViewScreen);
