import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image
} from "react-native";
import DrugIcon from "../DrugIcon/DrugIcon";
import DayViewSuccess from "../../assets/DayView-Success.png";
import DayViewFail from "../../assets/DayView-Fail.png";
import DayViewPending from "../../assets/DayView-Pending.png";

// TODO: status should be SUCCESS, FAIL, or PENDING 
const DrugInEvent = ({ onPress, drug, last }) => {
  const styles = createStyles(drug.color, drug.status);
  const statusIcon = drug.status == "SUCCESS" ? DayViewSuccess : drug.status == "FAIL" ? DayViewFail : DayViewPending;
  const heightStyles = last ? styles.tallHeight : styles.normalHeight;
  return (
    <TouchableHighlight style={heightStyles} onPress={onPress}>
      <View style={{flexDirection:"row"}}>
        <View style={styles.statusIconContainer}>
          <Image source={statusIcon} />
          <View style={ last ? styles.longVerticalLine : styles.verticalLine} />
        </View>
        <View style={styles.container}>
          <DrugIcon color={drug.color} scale={1.8} />
          <View style={styles.textWrapper}>
            <Text style={styles.drugName}>{drug.name}</Text>
            <Text style={styles.drugDosage}>{drug.dosage}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const createStyles = (drugColor, drugStatus) => {
  return StyleSheet.create({
    container: {
      width: 300,
      // height: 75,
      borderTopLeftRadius: 37,
      borderBottomLeftRadius: 37,
      backgroundColor: drugColor + "50",
      marginBottom: 10,
      flexDirection: "row",
      paddingLeft: 5,
      paddingTop: 5,
      paddingBottom: 5,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2
    },
    normalHeight: {
      height: 71,
    },
    tallHeight: {
      height: 150,
    },
    textWrapper: {
      marginLeft: 10
    },
    drugName: {
      fontWeight: "bold"
    },
    drugDosage: {}, 
    statusIconContainer: {
      height: 75,
      width: 30,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 2, 
    }, 
    verticalLine: {
      borderRightColor: "#C4C4C4",
      borderRightWidth: 1,
      height: 50,
      width: 1,
      marginRight: "auto",
      marginLeft: "auto",
      marginTop: 1,
      borderStyle: drugStatus === "PENDING" ? "dotted" : "solid",
      zIndex: -1,
    },
    longVerticalLine: {
      borderRightColor: "#C4C4C4",
      borderRightWidth: 1,
      height: 130,
      width: 1,
      marginRight: "auto",
      marginLeft: "auto",
      marginTop: 1,
      borderStyle: drugStatus === "PENDING" ? "dotted" : "solid",
    },
  });
};

export default DrugInEvent;
