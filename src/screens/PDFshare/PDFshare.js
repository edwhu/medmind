import * as React from 'react';
import { Text, View, StyleSheet, Share, Button } from 'react-native';
import { Constants, FileSystem } from 'expo';
import moment from 'moment';
import { medmindBlue } from '../../constants/styles';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
// You can import from local files


// or any pure javascript modules available in npm


export default class App extends React.Component {
  onSharePress() {
    Share.share({
    message: 'BAM: we\'re helping your business with awesome React Native apps',
    url: FileSystem.getInfoAsync(FileSystem.documentDirectory + "Test.pdf"),
    title: 'Wow, did you see that?'
  }, {
    // Android only:
    dialogTitle: 'Share BAM goodness',
    // iOS only:
    excludedActivityTypes: [
      'com.apple.UIKit.activity.PostToTwitter'
    ]
  })
  }

  onCurrentPress() {
  }

  onAllDrugsPress() {

  }

  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {};

  state = {
    title: this.props.title || 'Export Summary',

  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />

        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button
              onPress={this.onCurrentPress}
              title = "Current"
              color = {medmindBlue}
              />
          </View>
          <View style={styles.button}>
            <Button
              onPress={this.onAllDrugsPress}
              title = "All Drugs"
              color = {medmindBlue}
              />
          </View>
        </View>

        <ScrollView
          scrollEnabled={true}
        >
          <View
            style = {{
              borderWidth: 2,
              borderColor: 'lightgrey',
              margin: 10,
              height: 400
            }}
          >
            <Text style = {{
              textAlign: 'right',
              margin: 5,
            }}>
              Downloaded:  
              {moment().format("DD/MM/YYYY")}
            </Text>

            <Text style = {{
              fontSize: 24,
              margin: 5,
            }}>
            Jane Smith {"\n"}
            </Text>

            <View style = {{
              borderBottomColor: medmindBlue,
              borderBottomWidth: 1,
              margin: 5,
            }}
            />

            <Text style = {{
              fontSize: 10,
              margin: 5,
            }}>
              Diagnosis {"\n"}
              Diagnosis Date {"\n"}
              Diagnosis Status
            </Text>

            <View style = {styles.buttonContainer}>
              <Text style={{
                fontSize: 18,
                margin: 5
                }}>
                Current Medications
              </Text>

              <Text style = {styles.greyHeader}>
                Dosage
              </Text>
              <Text style = {styles.greyHeader}>
                Frequency
              </Text>

            </View>

            <View style = {{
              borderBottomColor: medmindBlue,
              borderBottomWidth: 1,
              margin: 5,
            }}
            />
          
            <View style = {styles.buttonContainer}>
              <Text style = {{
                margin: 5,
                width: '30%'
              }}>
                Drug example
              </Text>

              <Text style = {{
                width: '25%',
                textAlign: 'right'
              }}>
                Dosage example
              </Text>
            
              <Text style = {{
                textAlign: 'right',
                margin: 5,
                width: '25%'
              }}>
                Frequency example
              </Text>
            </View>
              
            <View style = {styles.buttonContainer}>
              <Text style={{
                fontSize: 18,
                margin: 5
                }}>
                Supplements
              </Text>

              <Text style = {styles.greyHeader}>
                Dosage
              </Text>
              <Text style = {styles.greyHeader}>
                Frequency
              </Text>

            </View>

            <View style = {{
              borderBottomColor: medmindBlue,
              borderBottomWidth: 1,
              margin: 5,
            }}
            />

            <View style = {styles.buttonContainer}>
              <Text style = {{
                margin: 5,
                width: '30%'
              }}>
                Supplement example
              </Text>

              <Text style = {{
                width: '25%',
                textAlign: 'right'
              }}>
                Dosage example
              </Text>
            
              <Text style = {{
                textAlign: 'right',
                margin: 5,
                width: '25%'
              }}>
                Frequency example
              </Text>
            </View>


          
            </View>

          <View style={{
            alignItems: 'center'
          }}>
            <View style={styles.button} >
              <Button
                onPress={this.onSharePress}
                title="Share"
                color={medmindBlue}
                accessibilityLabel="Share to your friends!"
              />
            </View>
          </View>  
      </ScrollView>  

      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: medmindBlue,
    width: '30%' ,
    height: 40 ,
    margin: 10
  },
  calendarWrapper: {
  },
  text: {
    textAlign: 'center',
    color: 'black'
  },
  logo: {
    width: 300,
    height: 300
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue'
  },

  greyHeader: {
    color: 'grey',
    margin: 5
  }
});
