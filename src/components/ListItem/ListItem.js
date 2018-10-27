import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";

const ListItem = ( {label, entry, onPress} ) => {
  let styles = createStyles();
  
  const button = (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.arrowButton}>{">"}</Text>
    </TouchableOpacity>
  );
  
  const text = (
    <Text style={styles.entry}>500 mg</Text>
  );

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.setting}>{label}</Text>
          {onPress ? button : null}
          {entry ? text : null}
        </View>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
    </View>
  );
};

const createStyles = () => {
   return StyleSheet.create({
    horizontalLine: {
      borderWidth: 0.65,
      borderColor: "#E5E5E5",
      width: "92%",
      alignSelf: "center",
    },
    row: {
      height: 50,
      flexDirection: "row",
      alignItems: "center",
    },
    setting: {
      fontSize: 15,
      color: "#333333",
      fontWeight: "400",
      left: 20,
      position: "absolute",
    },
    entry: {
      fontSize: 15,
      color: "#5B6571",
      fontWeight: "400",
      right: 20,
      position: "absolute",
    },
    button: {
    backgroundColor: "white",
    right: 20,
    position: "absolute",
    },
    arrowButton: {
      fontSize: 35,
      color: "#BDBDBD",
      fontWeight: "300",
    },
  });
};

export default ListItem;
