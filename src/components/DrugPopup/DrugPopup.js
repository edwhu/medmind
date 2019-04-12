import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import DrugIcon from '../DrugIcon/DrugIcon';
import Modal from 'react-native-modal';
import CloseButton from '../../assets/button-skip.png';
import DosageIcon from '../../assets/icon-dosage.jpg';
import TimeIcon from '../../assets/icon-time.png';
import NotesIcon from '../../assets/icon-notes.jpg';
import EditIcon from '../../assets/icon-edit2.png';
import { createStyles } from './styles';

const DrugPopup = ({ drug, navigation, visible, onClose }) => {
  const color = drug.color;
  const styles = createStyles(color);
  return(
    <Modal
	      animationInTiming = {300}
	      transparent={true}
	      visible={visible}
	    >
	      <View style={styles.modalContainer}>
	        <View style={styles.modalTopBar}>
	          <TouchableHighlight
	            onPress={onClose}>
	            <Image source={CloseButton} style={styles.closeButton} />
	          </TouchableHighlight>

	          <TouchableHighlight
	            onPress={() => {
	              onClose();	
	              navigation.navigate('editDrugScreen', {drug: drug});
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

	        </View>

	      </View>
	        
	    </Modal>
  );

};

export default DrugPopup;