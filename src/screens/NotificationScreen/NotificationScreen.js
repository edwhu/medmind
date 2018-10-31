import React, { Component } from "react";
import {TextInput, View, Keyboard} from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fireNotification } from "../../utils"

class NotificationScreen extends React.Component{

	onSubmit(e){
		fireNotification(e);
	}

	render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <TextInput
                    onSubmitEditing={this.onSubmit}
                    placeholder={'time in ms'}
                />
            </View>
        );
    }
}

function mapStateToProps(state, props) {
  return {
    reminders: state.remindersReducer.reminders,
    drugs: state.drugInfoReducer.drugInfo
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationScreen);
