import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';

// TODO: use drug.drugColor to modify the color in the StyleSheet
// TODO: props for

const GlobalDrugListItem = ({ onPress, drug}) => {
  let styles = createStyles(drug.color);
  return  <TouchableHighlight onPress={onPress}>
            <View style={styles.container}>
              <View style={styles.pillIconContainer}>
                <View style={styles.pillColorSide}></View>
                <View style={styles.pillGraySide}></View>
              </View>
              <Text style={styles.drugName}>
                {drug.name}
              </Text>
            </View>
          </TouchableHighlight>;
}

const createStyles = (drugColor) => {
  return StyleSheet.create({
    container: {
      marginRight: "auto",
      marginLeft: "auto",
      marginTop: 10,
      marginBottom: 10,
      paddingLeft: 15,
      width: "90%",
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 25,
      flex: 1,
      flexDirection : "row",
      justifyContent: 'flex-start',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0 , height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    pillIconContainer: {
      transform: [{ rotate: '-70deg'}],
      flexDirection: "row",
      margin: "auto",
      shadowColor: '#000',
      shadowOffset: { width: -2 , height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    pillGraySide: {
      height: 12,
      width: 15.6,
      borderTopRightRadius: 7,
      borderBottomRightRadius: 7,
      backgroundColor: "#FFFFFF",
    },
    pillColorSide: {
      height: 12,
      width: 15.6,
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
      backgroundColor: drugColor,
    },
    drugName: {
      fontSize: 16 ,
      color: "#5B6571",
      paddingLeft:15
    },
  });
}


export default GlobalDrugListItem;
