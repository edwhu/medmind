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
import { medmindBlue } from "../../constants/styles";

function getFadedFromHex(hexColor) {
  const red = parseInt(hexColor.substring(1, 3), 16);
  const blue = parseInt(hexColor.substring(3, 5), 16);
  const green = parseInt(hexColor.substring(5, 7), 16);

  const fade = c => Math.floor((5 * c + 11 * 255)/16);
  return `rgb(${fade(red)}, ${fade(blue)}, ${fade(green)})`;
}

class DrugBar extends Component {
  static navigationOptions = {};

  static propTypes = {
    drugInfo: PropTypes.objectOf(PropTypes.any),
    backgroundColor: PropTypes.string,
    beginningOfWeek: PropTypes.any,
    endOfWeek: PropTypes.any,
  }

  static defaultProps = {
    backgroundColor: medmindBlue,
    dayWidth: 0,
    width: 0
  };

  // TODO: Change backgroundColor to hex and set opacity to 50% compared to icon color
  state = {
    marginLeft: 0,
    width: 0
  };

  _getBarStyle = () => {
    const { width } = Dimensions.get('window');
    const { drugInfo, beginningOfWeek, endOfWeek } = this.props;
    const { startDate, endDate } = drugInfo;

    const beginsInWeek = startDate.isBetween(beginningOfWeek, endOfWeek, 'day', '[]');
    const endsInWeek = endDate.isBetween(beginningInWeek, endOfWeek, 'day', '[]');
    const isInWeek = !(endDate.isBefore(beginningOfWeek, 'day') || startDate.isAfter(endOfWeek, 'day'));

    const leftRadius = beginsInWeek ? 26 : 0;
    const rightRadius = endsInWeek ? 26 : 0;

    const beginningInWeek = moment.max(beginningOfWeek, startDate);
    const endInWeek = moment.min(endOfWeek, endDate);

    const numDays = moment.duration(endInWeek.diff(beginningInWeek)).days() + 1;
    const offset = beginsInWeek ? moment
          .duration(startDate.diff(beginningOfWeek))
          .days() : 0;

    let dayWidth = (numDays / 7) * width;
    let offsetWidth = (offset / 7) * width;

    const barStyle = { 
      width: isInWeek ? dayWidth : 0, 
      marginLeft: offsetWidth, 
      borderBottomLeftRadius: leftRadius, 
      borderBottomRightRadius: rightRadius, 
      borderTopLeftRadius: leftRadius, 
      borderTopRightRadius: rightRadius,
      backgroundColor: getFadedFromHex(this.props.backgroundColor),
    };

    return barStyle;

  }

  _openDrugInfo = () => {
    const { name, startDate, endDate } = this.props.drugInfo;
    console.log(
      `Label: ${name}, start: ${startDate.toDate()}, end: ${endDate.toDate()}`
    );
  };

  render() {
    const barStyle = this._getBarStyle();
    const { backgroundColor, beginningOfWeek, endOfWeek, drugInfo } = this.props;
    const { name, startDate, endDate } = drugInfo;

    // If the user is not taking this drug this week, don't show the pill icon
    const hideDrugIcon = startDate > endOfWeek || endDate < beginningOfWeek;

    return (
      <TouchableOpacity
        onPress={this._openDrugInfo}
        activeOpacity={0.6}
        style={[{ marginBottom: 1, backgroundColor: "transparent" }]}
      >
        <View style={barStyle}>
          <View style={styles.drugBarContainer}>
            {!hideDrugIcon && <DrugIcon color={backgroundColor} />}
            <Text style={styles.drugText} numberOfLines={2}>
              {name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  drugBarContainer: {
    height: 52,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingRight: 50
  },
  drugText: {
    color: "#5B6571",
    fontSize: 16,
    marginRight: 10,
    marginLeft: 10
  },
});

function mapStateToProps(state, props) {
  return {};
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrugBar);
