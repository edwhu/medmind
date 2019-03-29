import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, AsyncStorage } from 'react-native';
import styles from './styles';
import { ScrollView, FlatList } from 'react-native';
import DrugItemInDayView from '../../components/DrugItemInDayView/DrugItemInDayView';
import EventInDayView from '../../components/EventInDayView/EventInDayView';
import EmptyDrugScreen from '../EmptyScreens/EmptyDrugScreen';
import { connect } from 'react-redux';
import OptionButton from '../../components/OptionButton/OptionButton';

class DayViewScreen extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {};

  getDrug = (drugId) => {
    const drugs = this.props.drugs;
    let targetDrug = drugs.filter(drug => drug.id == drugId);
    if(targetDrug.length != 0){
      return targetDrug[0];
    }
    else 
      return null;
  };

  // TODO: This function must be completed to take the drugs by event and put it in the correct schema so that the components can use them
  organizeDrugsByEvent = (reminders) => {
    // Sort by time 
    reminders.sort((left, right) => left.time.minutes() + left.time.hours() * 60 > right.time.minutes() + right.time.hours() * 60 );
    // Convert information from reminders and drugs into drugsByEvent schema
    let key = -1;
    let drugsByEvent = [];
    let currentTimeDict = {time: null, key: key, drugs: []};
    let currentTime = null; 

    reminders.forEach(reminder => {
      const drugId = reminder.drugId;
      let drug = this.getDrug(drugId);
      const reminderTime = reminder.time;
      const reminderTimeString = reminder.time.format('HH:mm');
      const currentTimeString = (currentTime != null) ? currentTime.format('HH:mm') : null;
      // If we find a new time segment to take drugs, create a new entry
      if(currentTimeString != reminderTimeString){
        key++;
        currentTimeDict = {time: reminderTime, key: key, drugs: []};
        // Find corresponding drug given drugId
        if(drug !== null){
          currentTimeDict['drugs'].push(drug);
        }
        currentTime = reminder['time'];
        drugsByEvent.push(currentTimeDict);

      }
      // Otherwise, we append the current drug into the current time segment's array
      else {
        if(drug !== null){
          currentTimeDict['drugs'].push(drug);
        }
      }
    });

    return drugsByEvent;
  };

  navigateCamera = () => {
    this.props.navigation.navigate('cameraScreen');
  }
  navigateAddDrug = () => {
    this.props.navigation.navigate('addDrugScreen');
  }

  onPlusButtonPress = () => {
    this.props.navigation.navigate('cameraScreen');
  }

  constructor(){
    super();
    this.state = {firstLaunch: null};
  }
  componentDidMount(){
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        this.props.navigation.navigate('termsAndConditionsScreen');
      }});
  }

  render() {
    const reminders = this.props.reminders;
    const drugs = this.props.drugs;
    if (this.props.drugs.length === 0) {
      return (
        <View>
          <EmptyDrugScreen 
            cameraOnPress={this.navigateCamera} 
            drugOnPress={this.navigateAddDrug} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.text}>As Needed</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={drugs}
              renderItem={({ item }) => <DrugItemInDayView drug={item}/>}
              keyExtractor={(item) => item.id.toString()}
            />
            <View style={styles.dayVerticalListWrapper}>
              <FlatList
                data={this.organizeDrugsByEvent(reminders)}
                renderItem={({ item }) => <EventInDayView event={item} navigation={this.props.navigation}/>}
                style={styles.dayVerticalList}
                keyExtractor={(item) => item.key.toString()}
              />
            </View>
          </ScrollView>
          <OptionButton
            cameraOnPress={this.navigateCamera} 
            drugOnPress={this.navigateAddDrug} 
          />
        </View>
      );
    }
  }
}


function mapStateToProps(state){
  return {
    reminders: state.remindersReducer.reminders,
    drugs: state.drugInfoReducer.drugInfo 
  };
}

export default connect(
  mapStateToProps,
  null

)(DayViewScreen);
