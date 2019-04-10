import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import CloseButton from '../../assets/button-skip.png';
import SkipButton from '../../assets/button-skip2.png';
import TakeButton from '../../assets/button-take2.png';
import SnoozeButton from '../../assets/button-snooze2.png';
import DosageIcon from '../../assets/icon-dosage.jpg';
import TimeIcon from '../../assets/icon-time.png';
import NotesIcon from '../../assets/icon-notes.jpg';
import EditIcon from '../../assets/icon-edit2.png';
import DrugIcon from '../../components/DrugIcon/DrugIcon';
import { getFadedFromHex } from '../../utilities/helpers';

class DrugItemInDayView extends Component{
  state = {
    modalVisible: false,
    editFormVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const { drug } = this.props;
    const color = drug.color;
    const styles = createStyles(color);

    return (
      <View>
      <Modal
          animationInTiming = {300}
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modalContainer}>

            <View style={styles.modalTopBar}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                <Image source={CloseButton} style={styles.closeButton} />
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(false);
                  this.props.navigation.navigate('editDrugScreen', {drug: drug});
                }}>
                <Image source={EditIcon} style={styles.imageStyle} />
              </TouchableHighlight>
                      
            </View> 

            <View style={styles.modalPillBar}>
              <TouchableHighlight
                style = {styles.pillContainer}
                underlayColor = '#ccc'
              >
                <DrugIcon color={drug.color} />
              </TouchableHighlight>
                    
              <Text style={styles.modalDrugName}>{drug.name}</Text>
                    
            </View>

            <View style={styles.infoBar}>
              <View style={styles.iconView}>
                <Image source={TimeIcon} style={styles.iconStyle} />
                <View style={styles.iconTextView}>
                  <Text style={styles.iconText}
                    numberOfLines={2}> 
                                Scheduled for 9:30 AM on Oct 8 (Hardcoded)</Text>
                </View>
              </View>

              <View style={styles.iconView}>
                <Image source={DosageIcon} style={styles.iconStyle} />
                <View style={styles.iconTextView}>
                  <Text style={styles.iconText}>{drug.dosage}</Text>
                </View>
              </View>

              <View style={styles.iconView}>
                <Image source={NotesIcon} style={styles.iconStyle} />
                <View style={styles.iconTextView}>
                  <Text style={styles.iconText}> Additional Notes </Text>
                </View>
              </View>
            </View>

            <View style={styles.bottomBar}>

              <View style={styles.skipButtonView}>
                <Image source={SkipButton} style={styles.imageStyle} />
                <Text> Skip </Text>
              </View>

              <View style={styles.takeButtonView}>
                <Image source={TakeButton} style={styles.imageStyle} />
                <Text> Take </Text>
              </View>

              <View style={styles.snoozeButtonView}>
                <Image source={SnoozeButton} style={styles.imageStyle} />
                <Text> Snooze </Text>
              </View>

            </View>

          </View>
            
        </Modal>

      <TouchableHighlight onPress={() => { 
          this.setModalVisible(true);
        }}>
        <View style={styles.container}>
          <DrugIcon color={drug.color} />
          <Text style={styles.drugName}>{drug.name}</Text>
          <Text style={styles.drugDosage}>{drug.dosage}</Text>
        </View>
      </TouchableHighlight>
      </View>
      );
  }
}
// const DrugItemInDayView = ({ onPress, drug }) => {
//   let styles = createStyles(drug.color);
//   return (
//     <TouchableHighlight onPress={onPress}>
//       <View style={styles.container}>
//         <DrugIcon color={drug.color} />
//         <Text style={styles.drugName}>{drug.name}</Text>
//         <Text style={styles.drugDosage}>{drug.dosage}</Text>
//       </View>
//     </TouchableHighlight>
//   );
// };

const createStyles = (drugColor) => {
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
      backgroundColor: '#e3e3e3',
      height: '17.5%',
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

export default DrugItemInDayView;
