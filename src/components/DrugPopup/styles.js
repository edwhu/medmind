import { 
  StyleSheet,
  Dimensions,
} from 'react-native';
import { getFadedFromHex } from '../../utilities/helpers';

export const createStyles = (drugColor) => {
  const lighterColor = getFadedFromHex(drugColor);
  return StyleSheet.create({
    blurBackground: {
      position: 'absolute', 
      left: -20, 
      right: 0, 
      top: -20, 
      bottom: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    container: {
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      width: 140,
      height: 110,
      backgroundColor: '#E2E2E2',
      borderRadius: 10,
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
      fontWeight: 'bold',
      fontFamily: 'Helvetica-Light'
    },
    drugDosage: {
      marginTop: 5
    },
    modalContainer: {
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: 20,
      height:'60%', 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 5  
    },
    modalTopBar: { 
      borderTopLeftRadius: 20, 
      borderTopRightRadius:20, 
      height: '12.5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: lighterColor
    },
    pillContainer: {
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      width: Dimensions.get('window').width * 0.25,
      height: Dimensions.get('window').width * 0.25,
      backgroundColor: lighterColor,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 3,
      marginBottom: 10 
    },
    modalPillBar: {
      backgroundColor: 'white',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      height: '30%'
    },
    modalDrugName: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 20, 
      fontWeight: 'bold',
      color: '#5B6571'
    },
    infoBar: {
      marginTop: 30,
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
      marginTop: -5,
      width: 35,
      height: 35,
    },
    iconView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconStyle: {
      width: 25,
      height: 25,
      marginLeft: 30,
    },
    iconTextView: {
      marginLeft: 20, 
      width: '70%',
      justifyContent: 'center'
    }, 
    iconText: {
      fontSize: 18,
      fontFamily: 'Helvetica-Light',
      color: '#5B6571'
    },
    closeButton: {
      marginLeft: 5,
      marginTop: 5,
      width: 20, 
      height: 20
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