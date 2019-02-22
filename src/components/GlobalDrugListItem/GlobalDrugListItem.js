import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from "react-native";
import Svg, {
  Path,
} from 'react-native-svg';
// TODO: use drug.drugColor to modify the color in the StyleSheet
// TODO: props for

const checkbox = <Svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <Path 
    d="M1.66896 6.75671C1.25845 6.38725 0.626165 6.42053 0.256706 6.83104C-0.112753 7.24155 -0.0794748 7.87384 0.331035 8.24329L1.66896 6.75671ZM6 12L5.33104 12.7433C5.55842 12.9479 5.86697 13.0372 6.16851 12.9857C6.47005 12.9342 6.73141 12.7474 6.8779 12.4789L6 12ZM12.8779 1.47885C13.1424 0.994004 12.9637 0.386567 12.4789 0.122104C11.994 -0.142358 11.3866 0.0362995 11.1221 0.521148L12.8779 1.47885ZM0.331035 8.24329L5.33104 12.7433L6.66896 11.2567L1.66896 6.75671L0.331035 8.24329ZM6.8779 12.4789L12.8779 1.47885L11.1221 0.521148L5.1221 11.5211L6.8779 12.4789Z" 
    fill="white"
  />
</Svg>;


const GlobalDrugListItem = ({ onPress, drug, editing = true, selected = true }) => {
  let styles = createStyles(drug.color, selected);
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        { editing && <View style={styles.checkboxContainer}>
          {selected && checkbox}
        </View> }
        <View style={styles.pillIconContainer}>
          <View style={styles.pillColorSide} />
          <View style={styles.pillGraySide} />
        </View>
        <Text style={styles.drugName}>{drug.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const createStyles = (drugColor, editing) => {
  return StyleSheet.create({
    container: {
      marginRight: "auto",
      marginLeft: "auto",
      marginTop: 10,
      marginBottom: 10,
      paddingLeft: 15,
      width: "90%",
      height: 50,
      backgroundColor: "#FFFFFF",
      borderRadius: 25,
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2
    },
    pillIconContainer: {
      transform: [{ rotate: "-70deg" }],
      flexDirection: "row",
      margin: "auto",
      shadowColor: "#000",
      shadowOffset: { width: -2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2
    },
    pillGraySide: {
      height: 12,
      width: 15.6,
      borderTopRightRadius: 7,
      borderBottomRightRadius: 7,
      backgroundColor: "#FFFFFF"
    },
    pillColorSide: {
      height: 12,
      width: 15.6,
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
      backgroundColor: drugColor
    },
    drugName: {
      fontSize: 16,
      color: "#5B6571",
      paddingLeft: 15
    },
    checkboxContainer: {
      height: 25,
      width: 25,
      backgroundColor: editing ? '#61C0BF' : '#E0E0E0',
      borderRadius: 50,
      marginRight: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default GlobalDrugListItem;
