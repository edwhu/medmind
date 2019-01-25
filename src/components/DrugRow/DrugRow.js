import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import DrugIcon from "../DrugIcon/DrugIcon";

function getFadedFromHex(hexColor) {
  const red = parseInt(hexColor.substring(1, 3), 16);
  const blue = parseInt(hexColor.substring(3, 5), 16);
  const green = parseInt(hexColor.substring(5, 7), 16);

  const fade = c => Math.floor((5 * c + 11 * 255) / 16);
  return `rgb(${fade(red)}, ${fade(blue)}, ${fade(green)})`;
}

class DrugWeek extends Component {
  static navigationOptions = {};

  static propTypes = {
    drugInfoList: PropTypes.array,
    beginningOfWeek: PropTypes.any,
    endOfWeek: PropTypes.any,
  };

  static defaultProps = {
    dayWidth: 0,
    width: 0,
  };

  _getBarStyle = drugInfo => {
    const BORDER_RADIUS = 26;
    const { width } = Dimensions.get('window');
    const { beginningOfWeek, endOfWeek } = this.props;
    const { startDate, endDate } = drugInfo;

    const beginsInWeek = startDate.isBetween(
      beginningOfWeek,
      endOfWeek,
      'day',
      '[]',
    );
    const endsInWeek = endDate.isBetween(
      beginningInWeek,
      endOfWeek,
      'day',
      '[]',
    );
    const isInWeek = !(
      endDate.isBefore(beginningOfWeek, 'day') ||
      startDate.isAfter(endOfWeek, 'day')
    );

    const leftRadius = beginsInWeek ? BORDER_RADIUS : 0;
    const rightRadius = endsInWeek ? BORDER_RADIUS : 0;

    const beginningInWeek = moment.max(beginningOfWeek, startDate);
    const endInWeek = moment.min(endOfWeek, endDate);

    const numDays = moment.duration(endInWeek.diff(beginningInWeek)).days() + 1;
    const offset = beginsInWeek
      ? moment.duration(startDate.diff(beginningOfWeek)).days()
      : 0;

    let dayWidth = (numDays / 7) * width;
    let offsetWidth = (offset / 7) * width;

    const barStyle = {
      width: isInWeek ? dayWidth : 0,
      marginLeft: offsetWidth,
      borderBottomLeftRadius: leftRadius,
      borderBottomRightRadius: rightRadius,
      borderTopLeftRadius: leftRadius,
      borderTopRightRadius: rightRadius,
      backgroundColor: getFadedFromHex(drugInfo.color),
      position: 'absolute',
    };

    return barStyle;
  };

  _openDrugInfo = (drugInfo) => {
    // const { name, startDate, endDate } = drugInfo;
    // console.log(
    //   `Label: ${name}, start: ${startDate.toDate()}, end: ${endDate.toDate()}`,
    // );
  };

  _renderBar = drugInfo => {
    const barStyle = this._getBarStyle(drugInfo);
    const { id, name, startDate, endDate } = drugInfo;
    const { endOfWeek, beginningOfWeek } = this.props;
    const hideDrugIcon = startDate > endOfWeek || endDate < beginningOfWeek;
    return <TouchableOpacity key={id} style={barStyle} activeOpacity={0.6} onPress={() => this._openDrugInfo(drugInfo)}>
        <View style={styles.drugBarContainer}>
          {!hideDrugIcon && <DrugIcon color={drugInfo.color} />}
          <Text style={styles.drugText} numberOfLines={2}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>;
  };

  render() {
    const { drugInfoList } = this.props;
    return (
      <View style={styles.rowContainer}>
        {drugInfoList.map(this._renderBar)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drugBarContainer: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  drugText: {
    color: '#5B6571',
    fontSize: 16,
    marginRight: 10,
    marginLeft: 10,
  },
  rowContainer: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingRight: 50,
    marginBottom: 1,
  },
});

function mapStateToProps(state, props) {
  return {};
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrugWeek);
