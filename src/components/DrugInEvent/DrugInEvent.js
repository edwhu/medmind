import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';

const DrugInEvent = ({ onPress, drug}) =>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.pillIconContainer}>
            <View style={styles.pillColorSide}></View>
            <View style={styles.pillGraySide}></View>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.drugName}>
              {drug.name}
            </Text>
            <Text style={styles.drugDosage}>
              {drug.dosage}
            </Text>
          </View>
        </View>
      </TouchableHighlight>;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 75,
    borderTopLeftRadius: 37,
    borderBottomLeftRadius: 37,
    backgroundColor: "#EEEEEE",
    marginBottom: 10,
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0 , height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  pillIconContainer: {
    transform: [{ rotate: '-70deg'}],
    flexDirection: "row",
    margin: "auto",
    shadowColor: '#000',
    shadowOffset: { width: -2 , height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  pillGraySide: {
    height: 18,
    width: 23.4,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    backgroundColor: "#FFFFFF",
  },
  pillColorSide: {
    height: 18,
    width: 23.4,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    backgroundColor: "yellow",
  },
  textWrapper:{
    marginLeft: 10,
  },
  drugName: {
    fontWeight: "bold",
    
  },

  drugDosage: {
  },
});

export default DrugInEvent;
