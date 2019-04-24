import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import CollapsibleDatePicker from '../../components/CollapsibleDatePicker/CollapsibleDatePicker';
import FormField from '../../components/FormField/FormField';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { KeyboardAvoidingView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editDrug } from '../../redux/actions/drug';
import moment from 'moment';
import { drawerIconStyle } from '../../constants/styles';
import AddDrugIcon from '../../assets/07-Settings.png';
import styles from './styles';

class EditDrugScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Edit Drug',
    drawerIcon: () => <Image source={AddDrugIcon} style={drawerIconStyle} />
  };

  state = {
    id: 1, // take from drug
    name: 'Bevacizumab',
    dosage: '500mg',
    doctor: 'Dr. Who',
    frequency: '5x a day',
    startDate: moment().subtract(10, 'days'),
    endDate: moment().add(10, 'days'),
    color: '#990099'
  };

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    const drug = navigation.getParam('drug');
    this.state = {
      id: drug.id, 
      name: drug.name, 
      dosage: drug.dosage,
      doctor: drug.doctor,
      frequency: drug.frequency,
      startDate: drug.startDate,
      endDate: drug.endDate,
      color: '#FFDF00'
    };
    this.subs = [this.props.navigation.addListener('didFocus', (payload) => this.componentDidFocus(payload))];
  }

  componentDidFocus() {
    const { navigation } = this.props;
    const drug = navigation.getParam('drug');
    this.setState(drug);
  }

  componentWillUnmount() {
    this.subs.forEach((sub) => sub.remove());
  }

  render() {
    const { navigation } = this.props;
    const drug = navigation.getParam('drug');

    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScreenHeader {...this.props} title={'Drug Entry'} />
        <FormField
          header="Drug Name"
          onChange={(name) => this.setState({ name })}
          value={drug.name}
          placeholder={drug.name}
        />
        <FormField
          header="Dosage"
          onChange={(dosage) => this.setState({ dosage })}
          value={drug.dosage}
          placeholder={drug.dosage}
        />
        <FormField
          header="Doctor"
          onChange={(doctor) => this.setState({ doctor })}
          value={drug.doctor}
          placeholder={drug.doctor}
        />
        <FormField
          header="Frequency"
          onChange={(frequency) => this.setState({ frequency })}
          value={drug.frequency}
          placeholder={drug.frequency}
        />
        <CollapsibleDatePicker
          header="Start Date"
          setDate={(startDate) => this.setState({ startDate })}
          date={this.state.startDate}
        />
        <CollapsibleDatePicker
          header="End Date"
          setDate={(endDate) => this.setState({ endDate })}
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
            onPress={() => {
              //console.log(this.state);
              this.props.editDrug(this.state);
              navigation.navigate('dayViewScreen');
            }}
            name={'Submit'}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ editDrug }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(EditDrugScreen);