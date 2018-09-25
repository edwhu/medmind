import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text , ScrollView} from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

import { medmindBlue } from '../../constants/styles';
import ProfilePicturePlaceholder from '../../assets/profile_picture_placeholder.png';
import styles from './styles';


export default class CustomDrawer extends Component {
  // static propTypes = {
  //   // title: PropTypes.string,
  //   // hasMenu: PropTypes.bool,
  //   // hasSettings: PropTypes.bool,
  // };
  //
  // static defaultProps = {
  //   // title: 'Medmind',
  //   // hasMenu: true,
  //   // hasSettings: true,
  // };
  //
  // state = {
  //
  // };

  render() {
    return (
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={{flexDirection: 'row'}}>
            <Image resizeMode="contain" style={styles.profilePicture} source={ProfilePicturePlaceholder} />
            <Text style={styles.text}>
              FirstName LastName
            </Text>
          </View>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    )
  }

}
