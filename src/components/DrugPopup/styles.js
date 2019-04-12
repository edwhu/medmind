import { 
  StyleSheet,
  Dimensions,
} from 'react-native';
import { getFadedFromHex } from '../../utilities/helpers';

export const createStyles = (drugColor) => {
  const lighterColor = getFadedFromHex(drugColor);
  return StyleSheet.create({
    container: {
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      width: 140,
      height: 110,
      backgroundColor: '#E2E2E2',
      borderRadius: 20,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2
    },
    drugName: {
      marginTop: 25,
      fontWeight: 'bold'
    },
    drugDosage: {
      marginTop: 5
    },
    modalContainer: {
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 1,
      height:'60%', 
    },
    modalTopBar: { 
      borderTopLeftRadius: 20, 
      borderTopRightRadius:20, 
      height: '15%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: lighterColor
    },
    pillContainer: {
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      width: Dimensions.get('window').width * 0.15,
      height: Dimensions.get('window').width * 0.15,
      backgroundColor: lighterColor,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalPillBar: {
      backgroundColor: 'white',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      height: '30%'
    },
    modalDrugName: {
      fontSize: 20, 
      fontWeight: 'bold'
    },
    infoBar: {
      height: '30%',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },
    bottomBar: {
      backgroundColor: 'white',
      height: '7.5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomLeftRadius: 20, 
      borderBottomRightRadius: 20,
      padding: 20
    },
    imageStyle: {
      width: 40,
      height: 40,
  
    },
    iconView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconStyle: {
      width: 40,
      height: 40,
      marginLeft: 20,
    },
    iconTextView: {
      marginLeft: 20, 
      width: '70%',
      justifyContent: 'center'
    }, 
    iconText: {
      fontSize: 15,
      fontFamily: 'Helvetica-Light'
    },
    closeButton: {
      width: 34, 
      height: 34
    },
    skipButtonView: {
      alignItems: 'center',
      marginLeft: 20
    },
    takeButtonView: {
      alignItems: 'center'
    },
    snoozeButtonView: {
      alignItems: 'center',
      marginRight: 20
    }
  });
};