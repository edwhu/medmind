import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';

// TODO: use drug.drugColor to modify the color in the StyleSheet
// TODO: props for

const DrugIcon = ({ onPress, drug}) =>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.pillIconContainer}>
            <View style={styles.pillColorSide}></View>
            <View style={styles.pillGraySide}></View>
          </View>
          <Text style={styles.drugName}>
            {drug.name}
          </Text>
          <Text style={styles.drugDosage}>
            {drug.dosage}
          </Text>
        </View>
      </TouchableHighlight>;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    width: 140,
    height: 110,
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    flex: 1,
    flexDirection : "column",
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 12,
    width: 15.6,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: "#FFFFFF",
  },
  pillColorSide: {
    height: 12,
    width: 15.6,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: "yellow",
  },
  drugName: {
    marginTop: 25,
    fontWeight: "bold"
  },

  drugDosage: {
    marginTop: 5,
  },
});

export default DrugIcon;
