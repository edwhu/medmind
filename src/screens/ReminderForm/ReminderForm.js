import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { addReminder, updateNewReminder, updateReminder, setNewReminder, saveNewReminder } from '../../redux/actions/reminder';
import { defaultReminder } from '../../constants/constants';
import { connect } from 'react-redux';
import TimePicker from '../../components/TimePicker/TimePicker';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import styles from './styles';

class ReminderFormScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'New Reminder'
  };

  static propTypes = {};

  static defaultProps = {};

  // callback for login errors
  onError = (error) => {
    // eslint-disable-next-line no-console
    console.log('Error', error);
  };

  state = {
    title: this.props.title || 'Reminder',
  };

  openDrugListPage = () => {
    this.props.navigation.navigate('chooseDrugScreen', {
      showButton: true,
    });
  };

  openRepeatPage = () => {
    this.props.navigation.navigate('repeatScreen', {
      showButton: true,
    });
  };

  openSoundPage = () => {
    this.props.navigation.navigate('soundScreen', {
      showButton: true,
    });
  };

  getDrugName = (drugId) => {
    const drug = this.props.drugs.find((drug) => drug.id === drugId);
    if (typeof drug !== 'undefined') {
      return drug.name;
    }
  };

  getDrugById = (id) => {
    return this.props.drugs.find((drug) => drug.id === id);
  };

  updateReminder = () => {
    this.props.saveNewReminder();
  }

  addReminder = () => {
    const newReminder = this.props.newReminder;
    if (typeof newReminder.time === 'undefined') {
      this.props.updateNewReminder('time', moment());
    }
    const drug = this.getDrugById(this.props.newReminder.drugId);
    this.props.addReminder(drug);
  }

  saveReminder = () => {
    // Trimming the repeat selection down to one word ('Every week' => 'week')
    if (typeof this.props.newReminder.repeat !== 'undefined' && this.props.newReminder.repeat[0] === 'E') {
      const newRepeat = this.props.newReminder.repeat.split(' ')[1];
      this.props.updateNewReminder('repeat', newRepeat);
    }
    // Modifying existing reminder
    if (this.props.updateFlag) {
      this.updateReminder();
      this.props.setNewReminder(defaultReminder);
    }
    // Adding new reminder
    else {
      const drug = this.getDrugById(this.props.newReminder.drugId);
      this.addReminder(drug);
    }
    this.props.navigation.goBack();
  };

  render() {
    const { newReminder, updateNewReminder } = this.props;
    const arrowButton = (
      <Ionicons name="ios-arrow-forward" style={styles.arrowButton} />
    );
    const soundText = (
      <Text style={styles.selectedSetting}>{newReminder.sound}</Text>
    );
    const repeatText = (
      <Text style={styles.selectedSetting}>{newReminder.repeat}</Text>
    );
    const drugText = (
      <Text style={styles.selectedSetting}>{this.getDrugName(newReminder.drugId)}</Text>
    );
    return (
      <View style={styles.container}>
        <TimePicker
          header="Time"
          setDate={(time) => updateNewReminder('time', time)}
        />
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Drug</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openDrugListPage()}
          >
            {newReminder.drugId ? drugText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Repeat</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openRepeatPage()}
          >
            {newReminder.repeat ? repeatText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Dosage</Text>
          <Text style={styles.entry}>
            {newReminder.dosage ? newReminder.dosage : null}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row}>
          <Text style={styles.setting}>Sound</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openSoundPage()}
          >
            {newReminder.sound ? soundText : arrowButton}
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <TouchableOpacity onPress={() => this.saveReminder()}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state.remindersReducer.reminders,
    drugs: state.drugInfoReducer.drugInfo,
    newReminder: state.remindersReducer.newReminder,
    updateFlag: state.remindersReducer.updateFlag,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addReminder: bindActionCreators(addReminder, dispatch),
  updateReminder: bindActionCreators(updateReminder, dispatch),
  updateNewReminder: bindActionCreators(updateNewReminder, dispatch),
  setNewReminder: bindActionCreators(setNewReminder, dispatch),
  saveNewReminder: bindActionCreators(saveNewReminder, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderFormScreen);
