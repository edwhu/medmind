import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateNewReminder } from "../../redux/actions/reminder";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import ListItem from "../../components/ListItem/ListItem";
import { medmindBlue } from "../../constants/styles";
import styles from "./styles";

class ChooseDrugScreen extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Drug Names"
  };

  setDrug = (drugId, dosage) => {
    if (this.props.newReminder.drugId != drugId) {
      this.props.updateNewReminder("drugId", drugId);
      this.props.updateNewReminder("dosage", dosage);
    }
  };

  checkSelected = drugId => {
    return this.props.newReminder.drugId == drugId;
  };

  render() {
    let sortedDrugs = this.props.drugs.sort();
    const drugList = sortedDrugs.map(drug => {
      return (
        <ListItem
          key={drug.id}
          label={drug.name}
          onPress={() => this.setDrug(drug.id, drug.dosage)}
          selected={this.checkSelected(drug.id)}
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
    drugs: state.drugInfoReducer.drugInfo,
    newReminder: state.remindersReducer.newReminder,
  };
}

const mapDispatchToProps = dispatch => ({
  updateNewReminder: bindActionCreators(updateNewReminder, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseDrugScreen);
