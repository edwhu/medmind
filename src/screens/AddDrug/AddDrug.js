import React, { Component } from 'react';
import {
  Image, Text, View, StyleSheet,
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import BackHeader from '../../components/BackHeader/BackHeader';
import CollapsibleDatePicker from '../../components/CollapsibleDatePicker/CollapsibleDatePicker';
import FormField from '../../components/FormField/FormField';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { medmindBlue } from '../../constants/styles';
import { addDrug } from '../../redux/actions/drug';
import { drawerIconStyle } from '../../constants/styles';
import AddDrugIcon from '../../assets/07-Settings.png';

class AddDrugScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions =({ navigation }) => ({
    headerTitle: 'Enter Drug',
    headerTitleStyle: {
      color: 'white',
      fontWeight: '500',
      fontFamily: 'System',
      fontSize: 24,
      flex: 1,
      textAlign: 'center',
      marginRight: '23%',
    },
    headerLeft: <RoundedButton
      onPress={() => navigation.dangerouslyGetParent().navigate('timelineScreen')}
      name="Back"
      buttonStyle={styles.button}
    />,
    headerRight: null,
  });

  state = {
    name: 'Bevacizumab',
    dosage: '500mg',
    doctor: 'Dr. Who',
    frequency: '5x a day',
    startDate: moment().subtract(10, 'days'),
    endDate: moment().add(10, 'days'),
    color: '#990099',
  };

  onSubmit() {
    const { navigate } = this.props.navigation;
    this.props.addDrug(this.state);
    navigate('timelineScreen');
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
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
            onPress={() => this.onSubmit()}
            name="Submit"
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addDrug }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(AddDrugScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 200,
    height: 40,
  },
  button: {
    borderWidth: 2,
    borderColor: 'gray',
    alignSelf: 'center',
    width: 50,
    height: 37,
  },
  footerStyle: {
    flex: 1,
    // borderColor: 'black',
    // borderWidth: 5,
    height: 80,
    flexGrow: 1,
    justifyContent: 'center',
  },
  form: {
    height: 40,
    borderColor: medmindBlue,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  fieldContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
