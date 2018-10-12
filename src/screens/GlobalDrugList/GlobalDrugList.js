import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import styles from './styles';

import { ScrollView, FlatList} from 'react-native';
import DrugIcon from '../../components/DrugIcon/DrugIcon';
import EventInDayView from '../../components/EventInDayView/EventInDayView';

// Temp schema for as needed drugs
const asNeededDrugs = [
  {
    id : 1,
    key: "1",
    name : "Lorazepam",
    dosage: "2 mg",
    color: "#FFDF00"
  },
  {
    id: 2,
    key: "2",
    name : "Lorazepam",
    dosage: "2 mg",
    color: "#0000ff"
  },
  {
    id : 3,
    key: "3",
    name : "Lorazepam",
    dosage: "2 mg",
    color: "#009900"
  },
  {
    id : 4,
    key: "4",
    name : "Lorazepam",
    dosage: "2 mg",
    color: "#090990"
  },
  {
    id : 5,
    key: "5",
    name : "Lorazepam",
    dosage: "2 mg",
    color: "#123456"
  },
  {
    id : 6,
    key: "6",
    name : "Lorazepam",
    dosage: "2 mg",
    color: "#990099"
  }
]

// Temp schema for drugs by events
const drugsByEvents =[
  {
    time: "7:00 PM",
    key: "1",
    drugs :[
      {
        id : 1,
        key: "1",
        name : "Lorazepam",
        dosage: "2 mg",
        color: "#123456"
      },
      {
        id: 2,
        key: "2",
        name : "Lorazepam",
        dosage: "2 mg",
        color: "#990099"
      },
    ],
  },
  {
    time: "8:00 PM",
    key:"2",
    drugs :[
      {
        id : 1,
        key: "1",
        name : "Lorazepam",
        dosage: "2 mg",
        color: "#0000ff"
      },
      {
        id: 2,
        key: "2",
        name : "Lorazepam",
        dosage: "2 mg",
        color: "#0000ff"
      },
    ],
  },
  {
    time: "9:00 PM",
    key:"3",
    drugs :[
      {
        id : 1,
        key: "1",
        name : "Tylenol",
        dosage: "2 mg",
        color: "#0000ff"
      },
      {
        id: 2,
        key: "2",
        name : "Lorazepam",
        dosage: "2 mg",
        color: "#0000ff"
      },
    ],
  },
]

export default class GlobalDrugList extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {};

  state = {
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
          <ScrollView >
              <SearchBar />
              <FlatList data={drugsByEvents} renderItem={({item}) => <EventInDayView event={item} /> } style={styles.dayVerticalList} >
              </FlatList>
          </ScrollView>
      </View>
    );
  }
}
