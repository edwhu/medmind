import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";
import DrugInEvent from "../DrugInEvent/DrugInEvent";

const EventInDayView = ({ event }) => {
  const [hour, ampm] = event.time.split(' ');
  return <View style={styles.column}>
    <View style={styles.container}>
      <View style={styles.time}>
        <Text style={styles.text}>{hour}</Text>
        <Text style={styles.text}>{ampm}</Text>
      </View>
      <FlatList
        data={event.drugs}
        renderItem={({ item, index }) => <DrugInEvent drug={item} last={index === event.drugs.length - 1} />}
        style={styles.drugList}
      />
    </View>
  </View>;
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  drugList: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "System",
  },
  time: {
    width: '20%',
  },
});

export default EventInDayView;
