import * as React from 'react';
import { Text, View, StyleSheet, Share, Button } from 'react-native';
import { Constants, FileSystem } from 'expo';
import moment from 'moment';
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
  render() {
    return (
      <View style={styles.container}>
      <Text>
      {moment().format("DD/MM/YYYY")}
      </Text>

        <Text>
         Jane Smith {"\n"}
        </Text>

      <Text style={{fontWeight: 'bold'}}>
      Current Medications
      </Text>
      
      <Text>
        drugs {"\n"}
        are bad {"\n"}
        kids {"\n"} {"\n"}
      </Text>
        
      <Text style={{fontWeight: 'bold'}}>
      Supplements
      </Text>

      <Text>
        Tiger blood
      </Text>


       <Button
        onPress={this.onSharePress}
        title="Share"
       color="#841584"
       accessibilityLabel="Share to your friends!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
