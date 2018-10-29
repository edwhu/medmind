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

// import styles from './styles';
import { medmindBlue } from "../../constants/styles";

class DrugBar extends Component {
  static navigationOptions = {};

  static propTypes = {
    drugInfo: PropTypes.objectOf(PropTypes.any),
    backgroundColor: PropTypes.string,
    beginningOfWeek: PropTypes.any,
    endOfWeek: PropTypes.any
  };

  static defaultProps = {
    backgroundColor: medmindBlue,
    dayWidth: 0,
    width: 0
  };

  state = {
    barStyle: {
      backgroundColor: this.props.backgroundColor,
      width: 0,
      marginLeft: 0,
    },
    marginLeft: 0,
    width: 0
  };

  componentWillMount() {
    const { height, width } = Dimensions.get("window");
    let numDays; // track the number of days should be populated in the week
    let offset; // track what offset off of Monday the drug bar should be where 0 means it's Monday
    const startDate = this.props.drugInfo.startDate;
    const endDate = this.props.drugInfo.endDate;

    let borderTopLeftRadius = 26,
      borderTopRightRadius = 26,
      borderBottomLeftRadius = 26,
      borderBottomRightRadius = 26;

    if (
      startDate.isBetween(
        this.props.beginningOfWeek,
        this.props.endOfWeek,
        null,
        "[]"
      )
    ) {
      // starting in this week
      numDays = Math.abs(moment.duration(startDate.diff(endDate)).days()) + 1;
      offset = Math.abs(
        moment.duration(this.props.beginningOfWeek.diff(startDate)).days()
      );

      if (
        !endDate.isBetween(
          this.props.beginningOfWeek,
          this.props.endOfWeek,
          null,
          "[]"
        )
      ) {
        borderTopRightRadius = 0;
        borderBottomRightRadius = 0;
      }
    } else if (
      endDate.isBetween(
        this.props.beginningOfWeek,
        this.props.endOfWeek,
        null,
        "[]"
      )
    ) {
      // otherwise check if maybe it ended in this week
      numDays =
        Math.abs(
          moment.duration(this.props.beginningOfWeek.diff(endDate)).days()
        ) + 1;
      offset = 0;
      borderBottomLeftRadius = 0;
      borderTopLeftRadius = 0;
    } else if (
      endDate.isSameOrAfter(this.props.beginningOfWeek) &&
      startDate.isSameOrBefore(this.props.beginningOfWeek)
    ) {
      // handles if both start date was before the week and end date is after this week
      numDays = Math.abs(
        moment.duration(this.props.beginningOfWeek.diff(endDate))
      );
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
    console.log(
      `Label: ${
        this.props.drugInfo.name
      }, start: ${this.props.drugInfo.startDate.toDate()}, end: ${this.props.drugInfo.endDate.toDate()}`
    );
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this._openDrugInfo}
        activeOpacity={0.6}
        style={[{ marginBottom: 1 }, this.state.barStyle]}
      >
        <View>
          <View style={styles.drugBarContainer}>
            
            <Text style={styles.drugText} numberOfLines={2}>
              {this.props.drugInfo.name}
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
    justifyContent: "center",
  },
  drugText: {
    color: "#5B6571",
    fontSize: 16,
    marginRight: 10,
    marginLeft: 10
  }
});

function mapStateToProps(state, props) {
  return {};
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrugBar);
