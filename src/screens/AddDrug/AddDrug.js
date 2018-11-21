import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import CollapsibleDatePicker from "../../components/CollapsibleDatePicker/CollapsibleDatePicker";
import FormField from "../../components/FormField/FormField";
import RoundedButton from "../../components/RoundedButton/RoundedButton";
import { KeyboardAvoidingView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { medmindBlue } from "../../utilities/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addDrug } from "../../redux/actions/drug";
import moment from "moment";

class AddDrugScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Add Drug"
  };

  constructor(props) {
    super(props);
  }

  state = {
    name: "Bevacizumab",
    dosage: "500mg",
    doctor: "Dr. Who",
    frequency: "5x a day",
    startDate: moment().subtract(10, "days"),
    endDate: moment().add(10, "days"),
    color: "#990099"
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScreenHeader {...this.props} title={"Drug Entry"} />
        <FormField
          header="Drug Name"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          placeholder={this.state.name}
        />
        <FormField
          header="Dosage"
          onChangeText={dosage => this.setState({ dosage })}
          value={this.state.dosage}
          placeholder={this.state.dosage}
        />
        <FormField
          header="Doctor"
          onChangeText={doctor => this.setState({ doctor })}
          value={this.state.doctor}
          placeholder={this.state.dosage}
        />
        <FormField
          header="Frequency"
          onChangeText={frequency => this.setState({ frequency })}
          value={this.state.frequency}
          placeholder={this.state.frequency}
        />
        <CollapsibleDatePicker
          header="Start Date"
          setDate={startDate => this.setState({ startDate })}
          date={this.state.startDate}
        />
        <CollapsibleDatePicker
          header="End Date"
          setDate={endDate => this.setState({ endDate })}
          date={this.state.endDate}
        />

        <View style={styles.form}>
          <View style={styles.fieldContainer}>
            <Text>Colors</Text>
            <Ionicons name="ios-arrow-forward" size={16} />
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.fieldContainer}>
            <Text>Notifications</Text>
            <Ionicons name="ios-arrow-forward" size={16} />
          </View>
        </View>

        <View style={styles.footerStyle}>
          <RoundedButton
            onPress={() => this.props.addDrug(this.state)}
            name={"Submit"}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addDrug }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(AddDrugScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "white"
  },
  buttonStyle: {
    alignSelf: "center",
    width: 200,
    height: 40
  },
  footerStyle: {
    flex: 1,
    // borderColor: 'black',
    // borderWidth: 5,
    height: 80,
    flexGrow: 1,
    justifyContent: "center"
  },
  form: {
    height: 40,
    borderColor: medmindBlue,
    borderBottomWidth: 1,
    marginHorizontal: 20
  },
  fieldContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
