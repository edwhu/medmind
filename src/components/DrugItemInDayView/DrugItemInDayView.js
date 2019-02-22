import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import DrugIcon from '../DrugIcon/DrugIcon';

const DrugItemInDayView = ({ onPress, drug }) => {
  const styles = createStyles(drug.color);
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <DrugIcon color={drug.color} />
        <Text style={styles.drugName}>{drug.name}</Text>
        <Text style={styles.drugDosage}>{drug.dosage}</Text>
      </View>
    </TouchableHighlight>
  );
};

const createStyles = drugColor => StyleSheet.create({
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  drugName: {
    marginTop: 25,
    fontWeight: 'bold',
  },
  drugDosage: {
    marginTop: 5,
  },
});

export default DrugItemInDayView;
