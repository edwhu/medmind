import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity } from "react-native";
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

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Drug Names"
  };

  render() {
    let sortedDrugs = this.props.drugs.sort();
    const drugList = [];
    sortedDrugs.forEach(drug => {
      const listItem = (
        <ListItem key={drug.id} label={drug.name} />
      );
      drugList.push(listItem);
    });

    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        {drugList}
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
     drugs: state.drugInfoReducer.drugInfo,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseDrugScreen);
