import * as React from 'react';
import { Text, View, StyleSheet, Share, Button} from 'react-native';
import { Constants, FileSystem } from 'expo';
import moment from 'moment';
import { medmindBlue } from '../../constants/styles';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import PropTypes from 'prop-types';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import {testDrugs} from '../../constants/constants';
import styles from './styles';
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

  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {};

  state = {
    title: this.props.title || 'Export Summary',
  };

  
  render() {
    const children = testDrugs.map(item => { 
      return <View 
      key={item.label}
      style = {styles.buttonContainer}>
        <View style = {styles.columnContainer}>
          <Text style = {{
          textAlign: 'center',
          fontSize: 15,
          }}>
            {item.label}
          </Text>
        </View>
  
        <View style = {styles.border}>
        </View>
  
        <View style = {styles.columnContainer}>
          <Text style = {{
          textAlign: 'center',
          fontSize: 15,
          }}>
            {item.startDate.format("DD/MM/YYYY")}
          </Text>
        </View>
  
        <View style = {styles.border}>
        </View>
  
        <View style = {styles.columnContainer}>
          <Text style = {{
          textAlign: 'center',
          fontSize: 15,
          }}>
            {item.endDate.format("DD/MM/YYYY")}
          </Text>
        </View>
        </View>
    })


    return (
      <View style={styles.container}>
        <ScreenHeader {...this.props} title={this.state.title} />

          {/* <View style = {{
            justifyContent: 'space-between'
          }}> */}
            <Text style = {{
              fontSize: 14,
              textAlign: 'right',
              color: '#5B6571',
            }}>
              Downloaded:  
              {moment().format("DD/MM/YYYY")}
            </Text>

            <Text style = {{
              fontWeight: '600',
              fontSize: 20,
              margin: 7,
              textAlign: 'left',
            }}>
            Jane Smith {"\n"}
            </Text>

            <View style = {{
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              margin: 5,
            }}
            />

            <Text style = {{
              fontSize: 15,
              margin: 5,
            }}>
              Diagnosis {"\n"}
              Diagnosis Date {"\n"}
              Diagnosis Status
            </Text>
            
            <View style = {{
              padding: 10
            }}>
            </View>

            <ScrollView>
            <View style = {styles.buttonContainer}>
              <View style = {styles.columnContainer}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '600',
                  margin: 5,
                  textAlign: 'center',
                  
                  }}>
                  CURRENT MEDS
                </Text>
                </View>
              <View
                style={{
                borderLeftWidth: 1,
                borderLeftColor: '#E5E5E5',
                }}
              />

              <View style = {styles.columnContainer}>
                <Text style = {{
                fontSize: 14,
                fontWeight: '600',
                flexWrap: 'wrap',
                textAlign: 'center',
                }}>
                  Dosage
                </Text>
              </View>

              <View
                style={{
                borderLeftWidth: 1,
                borderLeftColor: '#E5E5E5',
                }}
              />

              <View style = {styles.columnContainer}>

                <Text style = {styles.headerText}>
                  Frequency
                </Text>
              </View>
            
            </View> 
            
            {children}
            
            <View style = {styles.buttonContainer}>
              <View style = {styles.columnContainer}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '600',
                  margin: 5,
                  textAlign: 'center',
                  
                  }}>
                  SUPPLEMENTS
                </Text>
                </View>
              <View
                style={{
                borderLeftWidth: 1,
                borderLeftColor: '#E5E5E5',
                }}
              />

              <View style = {styles.columnContainer}>
                <Text style = {{
                fontSize: 14,
                fontWeight: '600',
                flexWrap: 'wrap',
                textAlign: 'center',
                }}>
                  Dosage
                </Text>
              </View>

              <View
                style={{
                borderLeftWidth: 1,
                borderLeftColor: '#E5E5E5',
                }}
              />

              <View style = {styles.columnContainer}>

                <Text style = {styles.headerText}>
                  Frequency
                </Text>
              </View>
            
            </View> 
            
            {children}
            </ScrollView>
          <View style={{
            alignItems: 'center'
          }}>
            <View style={styles.button} >
              <Button
                onPress={this.onSharePress}
                title="Export"
                color={medmindBlue}
                accessibilityLabel="Share to your friends!"
              />
            </View>
          </View> 
          {/* </View>    */}
        

      </View>
    );
  }
}
