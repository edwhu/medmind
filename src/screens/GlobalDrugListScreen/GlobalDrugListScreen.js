import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import styles from "./styles";
import DrugIcon from "../../assets/04-DrugList.png";
import { ScrollView, FlatList } from "react-native";
import GlobalDrugListItem from "../../components/GlobalDrugListItem/GlobalDrugListItem";
import SearchBar from "../../components/SearchBar/SearchBar";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class GlobalDrugListScreen extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {};

  state = {
    atTopOfList: true,
    query: '',
  };

  handleScroll = (event) => {
    this.setState({
      atTopOfList: event.nativeEvent.contentOffset.y <= 0
    });
  }

  alphabetizeDrugs = (drugs) => {
    const reducer = (dictionary, drug) => {
      let key = drug.name[0].toUpperCase();
      if (!dictionary[key]) {
        dictionary[key] = [];
      }
      dictionary[key].push(drug);
      return dictionary;
    };

    const drugsByAlphabet = drugs.reduce(reducer, {});

    return drugsByAlphabet;
  }

  renderFilteredDrugs = (query) => {
    const sanitizedQuery = query.trim().toLowerCase();
    const drugs = this.props.testDrugs.filter(drug => {
      const drugName = drug.name.toLowerCase();
      return drugName.startsWith(sanitizedQuery);
    });

    return <FlatList
      data={drugs}
      keyExtractor={drug => drug.id}
      renderItem={({item: drug}) => <GlobalDrugListItem drug={drug} />}
    />;
  }

  renderAlphabetizedDrugs = () => {
    const alphabetizedDrugs = this.alphabetizeDrugs(this.props.testDrugs);
    const letters = Object.keys(alphabetizedDrugs).sort();
    return letters.map(letter => {
      const drugs = alphabetizedDrugs[letter];
      return <View key={letter} style={styles.alphabetList}>
        <View style={styles.alphabetSeparator}>
          <Text style={styles.alphabetSeparatorText}>{letter}</Text>
          <View style={styles.alphabetSeparatorLine} />
        </View>
        <FlatList data={drugs} keyExtractor={drug => drug.id.toString()} renderItem={({ item }) => <GlobalDrugListItem drug={item} />} style={styles.flatList} />
      </View>;
    });
  }

  updateQuery = (query) => {
    this.setState({query});
  }

  onPlusButtonPress = () => {
    this.props.navigation.navigate("cameraScreen")
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar atTopOfList={this.state.atTopOfList} onChange={this.updateQuery} />
        {!this.state.atTopOfList && <View style={styles.separator} />}
        <ScrollView
          style={styles.scrollView}
          onScroll={this.handleScroll.bind(this)}
        >
          {this.state.query.trim() ? this.renderFilteredDrugs(this.state.query) : this.renderAlphabetizedDrugs()}
        </ScrollView>
        <TouchableOpacity 
         style={styles.button}
         onPress={() => this.onPlusButtonPress()}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    testDrugs: state.drugInfoReducer.drugInfo
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalDrugListScreen);
