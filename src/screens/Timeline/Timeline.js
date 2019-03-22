import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeekIcon from '../../assets/01-Week.png';
import WeekSwiper from './WeekSwiper/WeekSwiper';
import styles from './styles';

class TimelineScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Timeline',
    drawerIcon: () => <Image source={WeekIcon} style={styles.imageStyle} />,
  };

  static propTypes = {};

  static defaultProps = {
    calendarType: 'week'
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <WeekSwiper navigation = {navigation}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { currentMonth, currentYear } = state.timelineReducer;
  return { currentMonth, currentYear };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineScreen);
