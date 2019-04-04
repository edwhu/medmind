import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import DrugInEvent from '../DrugInEvent/DrugInEvent';

const EventInDayView = ({ event, navigation}) => (
  <View style={styles.column}>
    <View style={styles.container}>
      <Text style={styles.text}>{event.time}</Text>
      <FlatList
        data={event.drugs}
        renderItem={({ item }) => <DrugInEvent drug={item} navigation={navigation}/>}
        style={styles.drugList}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    marginTop: 30,
    flexDirection: 'row',
    // alignItems: "center",
    justifyContent: 'center'
  },
  drugList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  text: {
    margin: 10,
    textAlign: 'center'
  },
  line: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '95%',
    marginTop: 25
  }
});

export default EventInDayView;
