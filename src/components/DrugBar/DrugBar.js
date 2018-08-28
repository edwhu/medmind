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
    dayWidth: 0,
    width: 0,
  };

  state = {
    numDays: 0,
  };

  componentWillMount() {
    const { height, width } = Dimensions.get('window');
    let marginLeft = 0;
    let marginRight = 0;
    let numDays;
    const startDate = this.props.drugInfo.startDate;
    const endDate = this.props.drugInfo.endDate;
    console.log(this.props.drugInfo.label);

    //TODO: calculate the width of the drugBar
    if (startDate.isBetween(this.props.beginningOfWeek, this.props.endOfWeek, null, '[]')) {
      console.log('first if');
      // starting and ending in this week
      numDays = Math.abs(moment.duration(startDate.diff(endDate)).days()) + 1;
      console.log('if 1: numDays:', numDays);
    } else if (endDate.isBetween(this.props.beginningOfWeek, this.props.endOfWeek, null, '[]')) {
      // otherwise check if maybe it ended in this week
      console.log('second if');
      numDays = Math.abs(moment.duration(this.props.beginningOfWeek.diff(endDate)).days()) + 1;
      console.log('if 2: numDays:', numDays);
    } else if (startDate.isBefore(this.props.beginningOfWeek) && endDate.isAfter(this.props.beginningOfWeek)) {
      // handles if start date was before the week but the end date is in the week or after
      console.log('third if');

    } else {
      console.log('else');
    }

    const dayWidth = numDays / 7 * width;

    this.setState({
      width,
      dayWidth,
    });
  }

  render() {
    return (
      <View style={{width: this.state.width}}>
        <View style={[styles.drugBarContainer, { backgroundColor: this.props.backgroundColor, width: this.state.dayWidth}]}>
          <Text style={styles.drugText} numberOfLines={1} >{ this.props.drugInfo.label }</Text>
        </View>
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