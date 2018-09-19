import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text , ScrollView} from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

import { medmindBlue } from '../../constants/styles';
import MedmindLogo from '../../assets/medmind-logo.png';
import styles from './styles';


export default class CustomDrawer extends Component {
  static propTypes = {
    // title: PropTypes.string,
    // hasMenu: PropTypes.bool,
    // hasSettings: PropTypes.bool,
  };

  static defaultProps = {
    // title: 'Medmind',
    // hasMenu: true,
    // hasSettings: true,
  };

  state = {

  };

  render() {
    return (
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={{flexDirection: 'row'}}>
            <Image resizeMode="contain" style={styles.profilePicture} source={MedmindLogo} />
            <Text >
              Section 1
            </Text>
          </View>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    )
  }

}
//
// const styles = StyleSheet.create({
//   container: {
//     height: 80,
//     backgroundColor: medmindBlue,
//     width: '100%',
//   },
//   appBar: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 15,
//     marginRight: 10,
//   },
//   hamburgerWrapper: {
//     width: 32,
//     height: 32,
//     alignItems: 'center',
//     flex: 1,
//   },
//   hamburgerIcon: {
//     alignSelf: 'flex-start'
//   },
//   settingsWrapper: {
//     width: 32,
//     height: 32,
//     alignItems: 'center',
//     flex: 1,
//   },
//   settingsIcon: {
//     alignSelf: 'flex-end',
//   },
//   appBarTitle: {
//     color: 'white',
//     fontWeight: '500',
//     fontFamily: 'System',
//     fontSize: 24,
//     flex: 1,
//   }
// })
