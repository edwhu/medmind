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

          <View style = {{
            justifyContent: 'space-between'
          }}>
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

            <ScrollView
            scrollEnabled={true}
            >

            <View style = {styles.buttonContainer}>
              <View style = {{
                flexDirection: 'column',
                width: '33%',
              }}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '600',
                  margin: 5,
                  textAlign: 'center',
                  
                  }}>
                  CURRENT MEDS
                </Text>

                <Text style = {{
                  textAlign: 'center',
                  fontSize: 15,
                  }}>
                Drug example
                </Text>
              </View>

              <View
                style={{
                borderLeftWidth: 1,
                borderLeftColor: '#E5E5E5',
                }}
              />

              <View style = {{
                flexDirection: 'column',
                width: '33.5%',
              }}>
                <View style = {{
                  height: 
                }}></View>

                <Text style = {{
                fontSize: 14,
                fontWeight: '600',
                flexWrap: 'wrap',
                textAlign: 'center',
                }}>
                  Dosage
                </Text>

                <Text style = {{
                fontSize: 14,
                textAlign: 'center'
                }}>
                  Dosage example
                </Text>

              </View>

              <View
                style={{
                borderLeftWidth: 1,
                borderLeftColor: '#E5E5E5',
                }}
              />

              <View style = {{
              flexDirection: 'column',
              width: '33.5%'
              }}>

                <Text style = {{
                fontSize: 14,
                fontWeight: '600',
                flexWrap: 'wrap',
                textAlign: 'center',
                }}>
                  Frequency
                </Text>

                <Text style = {{
                textAlign: 'center'
                }}>
                  Frequency example
                </Text>

              </View>
            </View>
              
            <View style = {{
              padding: 10
            }}>
            </View>

            <View style = {styles.buttonContainer}>
              <View style = {{
                flexDirection: 'column',
                width: '33%'
              }}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '600',
                  margin: 5,
                  }}>
                    SUPPLEMENTS
                </Text>

                <Text style = {{
                  textAlign: 'center',
                  fontSize: 15
                  }}>
                Drug example
                </Text>
              </View>

              <View
                style={{
                borderLeftWidth: 1,
                borderLeftColor: '#E5E5E5',
                }}
              />

              <View style = {{
                flexDirection: 'column',
                width: '33.5%'
              }}>
                <Text style = {{
                fontSize: 14,
                fontWeight: '600',
                textAlign: 'center',
                }}>
                  Dosage
                </Text>

                <Text style = {{
                fontSize: 14,
                textAlign: 'center',
                flexWrap: 'wrap'
                }}>
                  Dosage example
                </Text>

              </View>

              <View
                style={{
                borderLeftWidth: 1,
                borderLeftColor: '#E5E5E5',
                }}
              />

              <View style = {{
              flexDirection: 'column',
              width: '33.5%'
              }}>

                <Text style = {{
                fontSize: 14,
                fontWeight: '600',
                textAlign: 'center',
                }}>
                  Frequency
                </Text>

                <Text style = {{
                textAlign: 'center',
                flexWrap: 'wrap'
                }}>
                  Frequency example
                </Text>

              </View>
            </View>


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
          </View>   
        

      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
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
