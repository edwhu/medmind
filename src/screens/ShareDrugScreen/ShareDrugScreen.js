import * as React from 'react';
import {
  Text, View, StyleSheet, Share, Button, Image,
} from 'react-native';
import { Constants, FileSystem } from 'expo';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { medmindBlue } from '../../constants/styles';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import ExportIcon from '../../assets/05-ExportSumm.png';
import { testDrugs } from '../../constants/constants';
import styles from './styles';
// You can import from local files

// or any pure javascript modules available in npm

class ShareDrugScreen extends React.Component {
  onSharePress() {
    Share.share(
      {
        message:
          "BAM: we're helping your business with awesome React Native apps",
        url: FileSystem.getInfoAsync(`${FileSystem.documentDirectory}Test.pdf`),
        title: 'Wow, did you see that?',
      },
      {
        // Android only:
        dialogTitle: 'Share BAM goodness',
        // iOS only:
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
      }
    );
  }

  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {};

  state = {
    title: this.props.title || 'Export Summary',
  };

  render() {
    const children = this.props.testDrugs.map(item => (
      <View key={item.name} style={styles.buttonContainer}>
        <View style={styles.columnContainer}>
          <Text style={styles.dataStyle}>{item.name}</Text>
        </View>

        <View style={styles.border} />

        <View style={styles.columnContainer}>
          <Text style={styles.dataStyle}>
            {item.startDate.format('DD/MM/YYYY')}
          </Text>
        </View>

        <View style={styles.border} />

        <View style={styles.columnContainer}>
          <Text style={styles.dataStyle}>
            {item.endDate.format('DD/MM/YYYY')}
          </Text>
        </View>
      </View>
    ));

    return (
      <View style={styles.container}>
        <Text style={styles.dateStyle}>
          Downloaded:
          {moment().format('MM/DD/YYYY')}
        </Text>

        <Text style={styles.nameStyle}>
Jane Smith
          {'\n'}
        </Text>

        <View style={styles.horBorder} />

        <Text style={styles.patientData}>
          Diagnosis
          {' '}
          {'\n'}
          Diagnosis Date
          {' '}
          {'\n'}
          Diagnosis Status
        </Text>

        <View
          style={{
            padding: 10,
          }}
        />

        <ScrollView>
          <View style={styles.buttonContainer}>
            <View style={styles.columnContainer}>
              <Text style={styles.bigHeaderText}>CURRENT MEDS</Text>
            </View>
            <View style={styles.vertBorder} />

            <View style={styles.columnContainer}>
              <Text style={styles.headerText}>Dosage</Text>
            </View>

            <View style={styles.vertBorder} />

            <View style={styles.columnContainer}>
              <Text style={styles.headerText}>Frequency</Text>
            </View>
          </View>

          {children}

          <ScrollView>
            <View style={styles.buttonContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.bigHeaderText}>CURRENT MEDS</Text>
              </View>
              <View style={styles.vertBorder} />

              <View style={styles.columnContainer}>
                <Text style={styles.headerText}>Dosage</Text>
              </View>

              <View style={styles.vertBorder} />

              <View style={styles.columnContainer}>
                <Text style={styles.headerText}>Frequency</Text>
              </View>
            </View>

            {children}

            <View style={styles.buttonContainer}>
              <View style={styles.columnContainer}>
                <Text style={styles.bigHeaderText}>SUPPLEMENTS</Text>
              </View>
              <View style={styles.vertBorder} />

              <View style={styles.columnContainer}>
                <Text style={styles.headerText}>Dosage</Text>
              </View>

              <View style={styles.vertBorder} />

              <View style={styles.columnContainer}>
                <Text style={styles.headerText}>Frequency</Text>
              </View>
            </View>

            {children}
          </ScrollView>
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <View style={styles.button}>
              <Button
                onPress={this.onSharePress}
                title="Export"
                color={medmindBlue}
                accessibilityLabel="Share to your friends!"
              />
            </View>
            <View style={styles.vertBorder} />

            <View style={styles.columnContainer}>
              <Text style={styles.headerText}>Dosage</Text>
            </View>

            <View style={styles.vertBorder} />

            <View style={styles.columnContainer}>
              <Text style={styles.headerText}>Frequency</Text>
            </View>
          </View>

          {children}
        </ScrollView>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <View style={styles.button}>
            <Button
              onPress={this.onSharePress}
              title="Export"
              color="white"
              accessibilityLabel="Share to your friends!"
            />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    testDrugs: state.drugInfoReducer.drugInfo,
  };
}

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  null /* mapDispatchToProps */
)(ShareDrugScreen);
