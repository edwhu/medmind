import {
  StyleSheet,
} from 'react-native';

export const createStyles = (drugColor) => {
  return StyleSheet.create({
    container: {
      width: 300,
      height: 75,
      borderTopLeftRadius: 37,
      borderBottomLeftRadius: 37,
      backgroundColor: drugColor + '50',
      marginBottom: 10,
      flexDirection: 'row',
      paddingLeft: 20,
      paddingTop: 5,
      paddingBottom: 5,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2
    },
    textWrapper: {
      marginLeft: 10
    },
    drugName: {
      fontWeight: 'bold'
    },
  });
};