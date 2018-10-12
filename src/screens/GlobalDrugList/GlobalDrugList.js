import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import styles from './styles';

import { ScrollView, FlatList} from 'react-native';
import GlobalDrugListItem from '../../components/GlobalDrugListItem/GlobalDrugListItem';
import SearchBar from '../../components/SearchBar/SearchBar';

// Drugs must be alphabetized and put into separate arrays in order. (we could make a function in here that does that)
// The component will know what the alphabet is for the separator.
// Must be arrays in array
const drugsListAlphabetized = [
  [
    {
      id : 1,
      key: "1",
      name : "Abemaciclib",
      dosage: "2 mg",
      color: "#FFDF00"
    },
    {
      id: 2,
      key: "2",
      name : "Abraxane",
      dosage: "2 mg",
      color: "#0000ff"
    },
    {
      id : 3,
      key: "3",
      name : "Actemra",
      dosage: "2 mg",
      color: "#009900"
    },
    {
      id : 4,
      key: "4",
      name : "Ado-Trastuzumab Emtansine",
      dosage: "2 mg",
      color: "#090990"
    },
    {
      id : 5,
      key: "5",
      name : "Aminolevulinic Acid",
      dosage: "2 mg",
      color: "#123456"
    },
  ],
  [
    {
      id : 6,
      key: "6",
      name : "Bevacizumab",
      dosage: "2 mg",
      color: "#990099"
    }
  ],
]

export default class GlobalDrugList extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {};

  state = {
    atTopOfList: true
  };

  handleScroll(event) {
    if (event.nativeEvent.contentOffset.y <= 0) {
      this.setState({
        atTopOfList: true
      });
    }else{
      this.setState({
        atTopOfList: false
      });
    }
  }

  render() {
    let alphabetizedDrugsListComponent = drugsListAlphabetized.map((item, index)=>{
      return  <View key={index} style={styles.alphabetList}>
                <View style={styles.alphabetSeparator}>
                  <Text style={styles.alphabetSeparatorText}>
                    {item[0].name[0].toUpperCase()}
                  </Text>
                  <View style={styles.alphabetSeparatorLine}></View>
                </View>
                <FlatList data={item} renderItem={({item}) => <GlobalDrugListItem drug={item} /> } style={styles.flatList} ></FlatList>
              </View>
    });
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <SearchBar atTopOfList={this.state.atTopOfList}/>
        { !this.state.atTopOfList && <View style={styles.separator} ></View> }
        <ScrollView style={styles.scrollView} onScroll={this.handleScroll.bind(this)}>
          {alphabetizedDrugsListComponent}
        </ScrollView>
      </View>
    );
  }
}
