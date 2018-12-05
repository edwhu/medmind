import React, { Component } from "react";
import { Image, View, Button } from "react-native";
import { drawerIconStyle } from '../../constants/styles';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fireNotification } from "../../utils";
import NotificationIcon from "../../assets/07-Settings.png"

class NotificationScreen extends Component {

  static navigationOptions = {
    drawerLabel: "Notification List",
    drawerIcon: () => (
      <Image 
        source = {NotificationIcon}
        style = {drawerIconStyle}
      />
    )
  };

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
