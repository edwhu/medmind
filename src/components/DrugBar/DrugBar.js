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

// import styles from './styles';
import { medmindBlue } from "../../constants/styles";

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
    barStyle: {
      backgroundColor: this.props.backgroundColor + "50",
      width: 0,
      marginLeft: 0
    },
    marginLeft: 0,
    width: 0
  };

  componentWillMount() {
    const { height, width } = Dimensions.get("window");
    let numDays; // track the number of days should be populated in the week
    let offset; // track what offset off of Monday the drug bar should be where 0 means it's Monday
    const { drugInfo, beginningOfWeek, endOfWeek } = this.props;
    const { startDate, endDate } = drugInfo;

    let borderTopLeftRadius = 26;
    let borderTopRightRadius = 26;
    let borderBottomLeftRadius = 26;
    let borderBottomRightRadius = 26;

    if (startDate.isBetween(beginningOfWeek, endOfWeek, null, "[]")) {
      // starting in this week
      numDays = Math.abs(moment.duration(startDate.diff(endDate)).days()) + 1;
      offset = Math.abs(moment.duration(beginningOfWeek.diff(startDate)).days());

      if (!endDate.isBetween(beginningOfWeek, endOfWeek, null, "[]")) {
        borderTopRightRadius = 0;
        borderBottomRightRadius = 0;
      }
    } else if (endDate.isBetween(beginningOfWeek, endOfWeek, null, "[]")) {
      // otherwise check if maybe it ended in this week
      numDays =
        Math.abs(
          moment.duration(beginningOfWeek.diff(endDate)).days()
        ) + 1;
      offset = 0;
      borderBottomLeftRadius = 0;
      borderTopLeftRadius = 0;
    } else if (
      endDate.isSameOrAfter(beginningOfWeek) &&
      startDate.isSameOrBefore(beginningOfWeek)
    ) {
      // handles if both start date was before the week and end date is after this week
      numDays = Math.abs(moment.duration(beginningOfWeek.diff(endDate)));
      offset = 0;
      borderBottomLeftRadius = 0;
      borderBottomRightRadius = 0;
      borderTopLeftRadius = 0;
      borderTopRightRadius = 0;
    } else {
      // Shouldn't be in the week
      return;
    }

    let dayWidth = (numDays / 7) * width;
    let offsetWidth = offset * (width / 7);

    if (numDays + offset > 7) {
      dayWidth = Math.abs(((offset - 7) / 7) * width);
    }

    const barStyle = {
      width: dayWidth,
      marginLeft: offsetWidth,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderTopLeftRadius,
      borderTopRightRadius
    };

    const newStyle = Object.assign({}, this.state.barStyle, barStyle);

    this.setState({
      width,
      barStyle: newStyle
    });
  }

  _openDrugInfo = () => {
    const { name, startDate, endDate } = this.props.drugInfo;
    console.log(
      `Label: ${name}, start: ${startDate.toDate()}, end: ${endDate.toDate()}`
    );
  };

  render() {
    const barStyle = this.state.barStyle;
    const { backgroundColor, beginningOfWeek, endOfWeek, drugInfo } = this.props;
    const { name, startDate, endDate } = drugInfo;

    // If the user is not taking this drug this week, don't show the pill icon
    const hideDrugIcon = startDate > endOfWeek || endDate < beginningOfWeek;

    return (
      <TouchableOpacity
        onPress={this._openDrugInfo}
        activeOpacity={0.6}
        style={[{ marginBottom: 1 }, barStyle, { backgroundColor: "white" }]}
      >
        <View
          style={barStyle}
        >
          <View style={styles.barBackground}>
            <View style={styles.drugBarContainer}>
              {!hideDrugIcon && <DrugIcon color={backgroundColor} />}
              <Text style={styles.drugText} numberOfLines={2}>
                {name}
              </Text>
            </View>
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
  barBackground: {}
});

function mapStateToProps(state, props) {
  return {};
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrugBar);
