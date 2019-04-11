import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  Image,
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
import { createStyles } from './styles';

class DrugInEvent extends Component{
  state = {
    modalVisible: false,
    editFormVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render(){
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
