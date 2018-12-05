import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ListItem = ({ label, entry, arrowButtonPress, onPress, selected }) => {
  const button = (
    <TouchableOpacity style={styles.button} onPress={arrowButtonPress}>
      <Ionicons name="ios-arrow-forward" style={styles.arrowButton} />;
    </TouchableOpacity>
  );

  const text = <Text style={styles.entry}>500 mg</Text>;

  const checkMark = <Ionicons name="ios-checkmark" style={styles.checkMark} />;

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.row}>
          <Text style={styles.setting}>{label}</Text>
          {arrowButtonPress ? button : null}
          {entry ? text : null}
          {selected ? checkMark : null}
        </View>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    borderWidth: 0.65,
    borderColor: "#E5E5E5",
    width: "92%",
    alignSelf: "center"
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center"
  },
  setting: {
    fontSize: 15,
    color: "#333333",
    fontWeight: "400",
    left: 20,
    position: "absolute"
  },
  entry: {
    fontSize: 15,
    color: "#5B6571",
    fontWeight: "400",
    right: 20,
    position: "absolute"
  },
  button: {
    backgroundColor: "white",
    right: 20,
    position: "absolute"
  },
  arrowButton: {
    fontSize: 35,
    color: "#BDBDBD"
  },
  checkMark: {
    right: 25,
    position: "absolute",
    color: "#BDBDBD",
    fontSize: 45,
    fontWeight: "300"
  }
});

export default ListItem;
