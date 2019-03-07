import React from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

const SearchBar = ({ onChange }) => (
  <View style={styles.container}>
    <SimpleLineIcons
      name="magnifier"
      size={15}
      color="#5B6571"
      style={styles.iconLeft}
    />
    <TextInput style={styles.textInput} placeholder={'Search'} onChangeText={onChange} autoComplete="off" />
    <View style={styles.iconRight}>
      <MaterialIcons name="mic" size={20} color="#5D6570" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    width: '80%'
  },
  iconLeft: {
    width: '10%'
  },
  iconRight: {
    borderColor: 'black',
    borderLeftWidth: StyleSheet.hairlineWidth,
    width: '10%',
    paddingLeft: 8
  }
});

export default SearchBar;
