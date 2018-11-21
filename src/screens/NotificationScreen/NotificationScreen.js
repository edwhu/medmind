import React, { Component } from "react";
import { Text, TextInput, View, Keyboard, Button } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fireNotification } from "../../utils";

class NotificationScreen extends React.Component {
  onSubmit = e => {
    console.log("Inside onSubmit");
    let drugs = this.props.testDrugs;
    let reminders = this.props.testReminders;
    // console.log(drugs)
    let firstReminder = reminders[0];

    // get drug object
    let drug = drugs.filter(drug => drug.id == firstReminder.drugId)[0];

    fireNotification(firstReminder, drug);
  };

  static propTypes = {
    title: PropTypes.string
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          icon={{
            name: "arrow-right",
            size: 15,
            color: "blue"
          }}
          title="Get Notification"
          onPress={this.onSubmit}
        />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    testDrugs: state.drugInfoReducer.drugInfo,
    testReminders: state.remindersReducer.reminders
  };
}

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  null // mapDispatchToProps
)(NotificationScreen);
