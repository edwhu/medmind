import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateNewReminder } from '../../redux/actions/reminder';
import ListItem from '../../components/ListItem/ListItem';
import styles from './styles';

class ChooseDrugScreen extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  // callback for login errors
  onError = (error) => {
    // eslint-disable-next-line no-console
    console.log('Error', error);
  };

  state = {
    title: this.props.title || 'Drug Names'
  };

  setDrug = (drugId, dosage) => {
    if (this.props.newReminder.drugId != drugId) {
      this.props.updateNewReminder('drugId', drugId);
      this.props.updateNewReminder('dosage', dosage);
    }
  };

  checkSelected = (drugId) => {
    return this.props.newReminder.drugId == drugId;
  };

  render() {
    let sortedDrugs = this.props.drugs.sort();
    const drugList = sortedDrugs.map((drug) => {
      return (
        <ListItem
          key={drug.id}
          label={drug.name}
          onPress={() => this.setDrug(drug.id, drug.dosage)}
          selected={this.checkSelected(drug.id)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <ScrollView>{drugList}</ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    drugs: state.drugInfoReducer.drugInfo,
    newReminder: state.remindersReducer.newReminder,
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateNewReminder: bindActionCreators(updateNewReminder, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseDrugScreen);
