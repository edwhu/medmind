import React, { Component } from 'react';
import {
  // Modal,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
  Dimensions
} from 'react-native';
import DrugIcon from '../DrugIcon/DrugIcon';
import Modal from 'react-native-modal';
import CloseButton from '../../assets/button-skip.png';
import SkipButton from '../../assets/button-skip2.png';
import TakeButton from '../../assets/button-take2.png';
import SnoozeButton from '../../assets/button-snooze2.png';
import DosageIcon from '../../assets/icon-dosage.jpg';
import TimeIcon from '../../assets/icon-time.png';
import NotesIcon from '../../assets/icon-notes.jpg';
import EditIcon from '../../assets/icon-edit2.png';
import { getFadedFromHex } from '../../utilities/helpers';

const createStyles = drugColor => {
  const lighterColor = getFadedFromHex(drugColor);
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

class DrugInEvent extends Component{
  state = {
    modalVisible: false,
    editFormVisible: false,
    // styles: createStyles(this.props.drug.color)
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  // componentWillReceiveProps() {
  //   this.setState({styles: createStyles(this.props.drug.color)});
  // }

  render(){
    const { drug } = this.props;
    const { modalVisible } = this.state;
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
            <DrugIcon color={drug.color} scale={1.8} />
            <View style={styles.textWrapper}>
              <Text style={styles.drugName}>{drug.name}</Text>
              <Text style={styles.drugDosage}>{drug.dosage}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}



export default DrugInEvent;
