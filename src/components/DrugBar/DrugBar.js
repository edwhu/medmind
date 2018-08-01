import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

// import styles from './styles';
import { medmindBlue } from '../../constants/styles';

class DrugBar extends Component {
  static navigationOptions = {};

  static propTypes = {
    drugInfo: PropTypes.objectOf(PropTypes.any),
    backgroundColor: PropTypes.string,
    beginningOfWeek: PropTypes.any,
    endOfWeek: PropTypes.any,
  };

  static defaultProps = {
    backgroundColor: medmindBlue,
    days: 5
  };

  state = {

  };

  componentWillMount() {
    const { height, width } = Dimensions.get('window');
    let marginLeft = 0;
    let marginRight = 0;
    const startDate = this.props.drugInfo.startDate;
    const endDate = this.props.drugInfo.endDate;

    // if (startDate.isSameOrBefore(this.props.beginningOfWeek)) {
    //   // start drug on monday
    // } else if (startDate.isAfter(this.props.beginningOfWeek) && startDate.isSameOrBefore(this.props.endOfWeek)) {
    //   // the drug is starting this week but not on the first day
    // } else {
    //   // drug didn't start on or before this week, so shouldn't appear

    // }

    // if (endDate.isSameOrAfter(this.props.beginningOfWeek)) {
    //   // the drug is ending after the week start

    // }
    if (startDate.isBetween(this.props.beginningOfWeek, this.props.endOfWeek, null, '[]')) {
      // started in this week

    } else if (endDate.isBetween(this.props.beginningOfWeek, this.props.endOfWeek, null, '[]')) {
      // otherwise check if maybe it ended in this week

    } else if (startDate.isBefore(this.props.beginningOfWeek) && endDate.isSameOrAfter(this.props.beginningOfWeek)) {
      // handles if start date was before the week but the end date is in the week or after

    } else {
      
    }

    this.setState({
      width,
    });
  }

  render() {
    return (
      <View style={[styles.drugBarContainer, { backgroundColor: this.props.backgroundColor, width: this.props.days * (this.state.width / 7) }]}>
        <Text style={styles.drugText} numberOfLines={1}>{ this.props.drugInfo.label }</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  drugBarContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  drugText: {
    color: 'white',
    fontSize: 16,
    marginRight: 15,
    marginLeft: 15,
  },
});

function mapStateToProps(state, props) {
  return {

  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {

    }, 
    dispatch
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(DrugBar);