import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 10,
  }
})

class HeaderRight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View><Text style={styles.text}>Edit</Text></View>
    );
  }
}

export default HeaderRight;