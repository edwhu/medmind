import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import AcceptButton from '../../components/AcceptButton/AcceptButton';

export default class TermsAndConditionsScreen extends Component {

  static propTypes = {};

  static defaultProps = {};

  state = {};

  // callback for login errors
  onError = error => {
    // eslint-disable-next-line no-console
    console.log('Error', error);
  };

  state = {
    title: this.props.title || 'MedMind',
    showButton: false
  };

  onAcceptButtonPress = () => {
    this.props.navigation.navigate('privacyPolicyScreen');
  }

  render() {
    const { navigation } = this.props;
    const showButton = navigation.getParam('showButton', false);
    const button = (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <View style={styles.boxContainer}>
          <ScrollView style={styles.textBox}>
            <Text style={styles.text}>
              MedMind is a mobile application associated with our parent non-profit, CancerBase (see www.cancerbase.org). Our Terms and Conditions fall within the CancerBase legal documentation, detailed below:
              {'\n'}
              {'\n'}
              Last Revised: June 21, 2016
              {'\n'}
              1) Acceptance of Terms of Use
              {'\n'}
              Please carefully read the following Terms of Use (“Terms”) before using the CANCERBASE Web site or mobile application (collectively the “Site”). By accessing and using this Site, you acknowledge that you have read, understood and agree to be bound by these Terms which form an agreement that is effective as if you had signed it. If at any time you do not agree to these Terms, please do not access or use this Site or any of its content.
              {'\n'}
              YOUR ACCESS TO, USE OF AND BROWSING OF THE SITE AND ITS CONTENTS ARE SUBJECT TO ALL TERMS OF USE CONTAINED HEREIN AND ALL APPLICABLE LAWS AND REGULATIONS. IF YOU DO NOT AGREE TO THESE TERMS OF USE, YOUR PERMISSION TO ACCESS OR USE THE SITE IS AUTOMATICALLY AND IMMEDIATELY REVOKED.
              {'\n'}
              These Terms may be revised or updated from time to time. Accordingly, you should check the Terms regularly for updates. You can determine when the Terms were last revised by referring to the “Last Revised” legend at the top of this page. Any changes in these Terms take effect upon posting and will only apply to use of the Site after that date. Each time you access, use or browse the Site, you signify your acceptance of the then-current Terms.
            </Text>
          </ScrollView>
          <AcceptButton onPress={this.onAcceptButtonPress}/>
        </View>
        {showButton ? button : null}
      </View>
    );
  }
}
