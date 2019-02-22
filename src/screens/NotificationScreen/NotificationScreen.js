import React, { Component } from 'react';
import { Image, View, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { drawerIconStyle } from '../../constants/styles';
import { fireNotification } from '../../utilities/notifications';
import NotificationIcon from '../../assets/07-Settings.png';

class NotificationScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notification List',
    drawerIcon: () => (
      <Image source={NotificationIcon} style={drawerIconStyle} />
    ),
  };

  onSubmit = (e) => {
    console.log('Inside onSubmit');
    const drugs = this.props.testDrugs;
    const reminders = this.props.testReminders;
    // console.log(drugs)
    const firstReminder = reminders[0];

    // get drug object
    const drug = drugs.filter(drug => drug.id == firstReminder.drugId)[0];

    fireNotification(firstReminder, drug);
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          icon={{
            name: 'arrow-right',
            size: 15,
            color: 'blue',
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
    testReminders: state.remindersReducer.reminders,
  };
}

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  null // mapDispatchToProps
)(NotificationScreen);
