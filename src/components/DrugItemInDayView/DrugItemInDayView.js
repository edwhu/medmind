import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import DrugIcon from '../../components/DrugIcon/DrugIcon';

const DrugItemInDayView = ({ onPress, drug }) => {
  let styles = createStyles(drug.color);
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

const createStyles = () => {
  return StyleSheet.create({
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
      shadowRadius: 2
    },
    drugName: {
      marginTop: 25,
      fontWeight: 'bold'
    },
    drugDosage: {
      marginTop: 5
    }
  });
};

export default DrugItemInDayView;
