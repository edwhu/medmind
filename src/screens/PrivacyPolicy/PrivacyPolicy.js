import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import AcceptButton from '../../components/AcceptButton/AcceptButton';

export default class PrivacyScreen extends Component {

  static propTypes = {};

  static defaultProps = {};

  state = {};

  // callback for login errors
  onError = (error) => {
    // eslint-disable-next-line no-console
    console.log('Error', error);
  };

  state = {
    title: this.props.title || 'MedMind'
  };

  onAcceptButtonPress = () => {
    this.props.navigation.navigate('dayViewScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Privacy Policy</Text>
        <View style={styles.boxContainer}>
          <ScrollView style={styles.textBox}>
            <Text style={styles.text}>
              PRIVACY POLICY FOR MEDMIND VERSION 1.0.0 (CURRENT VERSION):
              {'\n'}
              All data entered into MedMind is stored locally on your device. The current version of MedMind does not store or own any of your data, and is therefore not responsible for any compromises to your data on your mobile device. This also means that your data will be lost if you change devices or uninstall the MedMind app.
              {'\n'}
              {'\n'}
              FULL DISCLOSURE OF FUTURE PRIVACY POLICY FOR UPDATES:
              {'\n'}
              As MedMind grows, there may be a need to store and/or back up your information on our servers. You will always be informed of any update to our above Privacy Policy. We intend to enact a Privacy Policy similar to that of our parent non-profit, CancerBase, detailed below:
              {'\n'}
              {'\n'}
              Version 1.4. Last Revised: June 24, 2016 10:09:32 am Pacific Time
              {'\n'}
              CancerBase (“CancerBase”) is a patient/scientist nonprofit that seeks to:
              {'\n'}
              (a) bring together information about cancer
              {'\n'}
              (b) accelerate our understanding of cancer by globally sharing de-identified and anonymized data about cancer
              {'\n'}
              (c) empower people with cancer
              {'\n'}
              (d) give everyone a better understanding of the global where, when, and what of cancer
              {'\n'}
              {'\n'}
              We are passionately committed to protecting your privacy.
              {'\n'}
              This Privacy Policy describes how CancerBase protects and uses your Data (as defined below) we collect on our website, located at CANCERBASE.ORG, our mobile application (“Application()“), and our widgets (collectively, the “Site”).
              {'\n'}
              CancerBase is not a covered entity or business associate of a covered entity as defined in the Health Insurance Portability and Accountability Act of 1996 (HIPAA). CancerBase does not create, receive, maintain, transmit, or share Protected Health Information (PHI) as defined in HIPAA. This means that the information that you provide to CancerBase is not protected by HIPAA.
            </Text>
          </ScrollView>
          <AcceptButton onPress={this.onAcceptButtonPress}/>
        </View>
      </View>
    );
  }
}
