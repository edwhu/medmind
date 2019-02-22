import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import DrugIcon from '../DrugIcon/DrugIcon';

const DrugInEvent = ({ onPress, drug }) => {
  const styles = createStyles(drug.color);
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <DrugIcon color={drug.color} scale={1.8} />
        <View style={styles.textWrapper}>
          <Text style={styles.drugName}>{drug.name}</Text>
          <Text style={styles.drugDosage}>{drug.dosage}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const createStyles = drugColor => StyleSheet.create({
  container: {
    width: 300,
    height: 75,
    borderTopLeftRadius: 37,
    borderBottomLeftRadius: 37,
    backgroundColor: `${drugColor}50`,
    marginBottom: 10,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textWrapper: {
    marginLeft: 10,
  },
  drugName: {
    fontWeight: 'bold',
  },
  drugDosage: {},
});

export default DrugInEvent;
