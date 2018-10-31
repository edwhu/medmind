import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import ListItem from "../../components/ListItem/ListItem";
import { medmindBlue } from "../../constants/styles";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

class RepeatScreen extends Component {

  static propTypes = {};

  static defaultProps = {};

  state = {};

  // callback for login errors
  onError = error => {
    console.log("Error", error);
  };

  state = {
    title: this.props.title || "Repeat"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />
        <ListItem label='Does not repeat' />
        <ListItem label='Every day' />
        <ListItem label='Every week' />
        <ListItem label='Every month' />
        <ListItem label='Every year' />
        <TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.setting}>Custom</Text>
            <TouchableOpacity style={styles.button}>
              <Ionicons name='ios-arrow-forward' style={styles.arrowButton} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepeatScreen);
