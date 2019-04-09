import React, { Component } from 'react';
import { View,  Image} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeekIcon from '../../assets/01-Week.png';
import WeekSwiper from './WeekSwiper/WeekSwiper';
import EmptyDrugScreen from '../EmptyScreens/EmptyDrugScreen';
import styles from './styles';
import moment from 'moment';

class TimelineScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('title', moment().format('MMMM')),
    drawerLabel: 'Timeline',
    drawerIcon: () => <Image source={WeekIcon} style={styles.imageStyle} />,
  });

  static propTypes = {};

  static defaultProps = {
    calendarType: 'week'
  };

  navigateCamera = () => {
    this.props.navigation.navigate('cameraScreen');
  }
  navigateAddDrug = () => {
    this.props.navigation.navigate('addDrugScreen');
  }

  render() {
    if (this.props.drugInfo.length === 0) {
      return (
        <View>
          <EmptyDrugScreen 
            cameraOnPress={this.navigateCamera} 
            drugOnPress={this.navigateAddDrug} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <WeekSwiper navigation = {this.props.navigation}/>
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  const { currentMonth, currentYear } = state.timelineReducer;
  const { drugInfo } = state.drugInfoReducer;
  return { currentMonth, currentYear, drugInfo };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineScreen);
