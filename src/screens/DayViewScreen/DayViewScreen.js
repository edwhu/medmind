import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import styles from "./styles";
import DayIcon from "../../assets/00-Day.png";
import { ScrollView, FlatList } from "react-native";
import DrugItemInDayView from "../../components/DrugItemInDayView/DrugItemInDayView";
import EventInDayView from "../../components/EventInDayView/EventInDayView";

// Temp schema for as needed drugs
const asNeededDrugs = [
  {
    id: 1,
    key: "1",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#FFDF00"
  },
  {
    id: 2,
    key: "2",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#0000ff"
  },
  {
    id: 3,
    key: "3",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#009900"
  },
  {
    id: 4,
    key: "4",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#090990"
  },
  {
    id: 5,
    key: "5",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#123456"
  },
  {
    id: 6,
    key: "6",
    name: "Lorazepam",
    dosage: "2 mg",
    color: "#990099"
  }
];

// Temp schema for drugs by events
const drugsByEvents = [
  {
    time: "7:00 PM",
    key: "1",
    drugs: [
      {
        id: 1,
        key: "1",
        name: "Lorazepam",
        dosage: "2 mg",
        color: "#123456"
      },
      {
        id: 2,
        key: "2",
        name: "Lorazepam",
        dosage: "2 mg",
        color: "#990099"
      }
    ]
  },
  {
    time: "8:00 PM",
    key: "2",
    drugs: [
      {
        id: 1,
        key: "1",
        name: "Lorazepam",
        dosage: "2 mg",
        color: "#0000ff"
      },
      {
        id: 2,
        key: "2",
        name: "Lorazepam",
        dosage: "2 mg",
        color: "#0000ff"
      }
    ]
  },
  {
    time: "9:00 PM",
    key: "3",
    drugs: [
      {
        id: 1,
        key: "1",
        name: "Tylenol",
        dosage: "2 mg",
        color: "#0000ff"
      },
      {
        id: 2,
        key: "2",
        name: "Lorazepam",
        dosage: "2 mg",
        color: "#0000ff"
      }
    ]
  }
];

export default class DayViewScreen extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {};

  state = {};

  // TODO: This function must be completed to take the drugs by event and put it in the correct schema so that the components can use them
  organizeDrugsByEvent() {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>As Needed</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={asNeededDrugs}
            renderItem={({ item }) => <DrugItemInDayView drug={item} />}
          />
          <View style={styles.dayVerticalListWrapper}>
            <FlatList
              data={drugsByEvents}
              renderItem={({ item }) => <EventInDayView event={item} />}
              style={styles.dayVerticalList}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
