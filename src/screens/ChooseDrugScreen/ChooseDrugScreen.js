import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import ListItem from "../../components/ListItem/ListItem";
import { medmindBlue } from "../../constants/styles";
import styles from "./styles";

class ChooseDrugScreen extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  componentWillMount() {
    this.setState({ drug: this.props.navigation.state.params.selectedDrug });
  }

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Drug Names"
  };

  setDrug = (drug, dosage) => {
    if (this.state.drug != drug) {
      this.setState({ drug: drug });
      this.props.navigation.state.params.returnDrug(drug, dosage);
    }
  };

  checkSelected = drug => {
    return this.state.drug == drug;
  };

  render() {
    let sortedDrugs = this.props.drugs.sort();
    const drugList = sortedDrugs.map(drug => {
      return (
        <ListItem
          key={drug.id}
          label={drug.name}
          onPress={() => this.setDrug(drug.name, drug.dosage)}
          selected={this.checkSelected(drug.name)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <ScrollView>{drugList}</ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    drugs: state.drugInfoReducer.drugInfo
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseDrugScreen);
