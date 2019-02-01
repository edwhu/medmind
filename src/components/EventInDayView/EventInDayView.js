import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image
} from "react-native";
import DrugInEvent from "../DrugInEvent/DrugInEvent";

const EventInDayView = ({ event }) => (
  <View style={styles.column}>
    <View style={styles.container}>
      <Text style={styles.text}>{event.time}</Text>
      <FlatList
        data={event.drugs}
        renderItem={({ item }) => <DrugInEvent drug={item} />}
        style={styles.drugList}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center"
  },
  drugList: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  text: {
    margin: 10,
    textAlign: "center"
  },
});

export default EventInDayView;
