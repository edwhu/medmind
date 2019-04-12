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
    return this.props.drugs.find((drug) => drug.id === drugId);
  };

  // TODO: This function must be completed to take the drugs by event and put it in the correct schema so that the components can use them
  organizeDrugsByEvent = (allReminders) => {
    const { currentDay } = this.props;
    const todaysReminders = allReminders.filter((reminder) => {
      if (reminder.endDate && reminder.endDate.isBefore(currentDay, 'day')) {
        return false;
      }
      switch(reminder.repeat) {
      case 'week': {
        return reminder.time.day() === currentDay.day();
      }
      case 'day': {
        return true;
      }
      case 'custom': {
        return reminder.selectedWeekdays[currentDay.day()];
      }
      }
    });

    todaysReminders.sort((a, b) => a.time.isAfter(b.time, 'seconds'));
    const remindersByTime = todaysReminders.reduce((acc, reminder) => {
      const timeString = reminder.time.format('hh:mm A');
      if (!acc[timeString]) {
        acc[timeString] = [];
      }
      acc[timeString].push(reminder);
      return acc;
    }, {});

    return Object.entries(remindersByTime).map(([time, reminders], key) => ({
      time,
      key,
      drugs: reminders.map((reminder) => this.getDrug(reminder.drugId)),
    }));
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
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
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
    drugs: state.drugInfoReducer.drugInfo,
    currentDay: state.timelineReducer.currentDay,
  };
}

export default connect(
  mapStateToProps,
  null

)(DayViewScreen);
