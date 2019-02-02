import React, { Component } from "react";
import {
  // Modal,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
  Dimensions
} from "react-native";
import DrugIcon from "../DrugIcon/DrugIcon";
import Modal from "react-native-modal";
import CloseButton from "../../assets/button-skip.png"
import SkipButton from "../../assets/button-skip2.png";
import TakeButton from "../../assets/button-take2.png";
import SnoozeButton from "../../assets/button-snooze2.png";
import DosageIcon from "../../assets/icon-dosage.png";
import TimeIcon from "../../assets/icon-time.png";
import NotesIcon from "../../assets/icon-notes.png";
import EditIcon from "../../assets/icon-edit2.png"

function getFadedFromHex(hexColor) {
  const red = parseInt(hexColor.substring(1, 3), 16);
  const blue = parseInt(hexColor.substring(3, 5), 16);
  const green = parseInt(hexColor.substring(5, 7), 16);

  const fade = c => Math.floor((5 * c + 11 * 255) / 16);
  return `rgb(${fade(red)}, ${fade(blue)}, ${fade(green)})`;
}

const createStyles = drugColor => {
  return StyleSheet.create({
    container: {
      width: 300,
      height: 75,
      borderTopLeftRadius: 37,
      borderBottomLeftRadius: 37,
      backgroundColor: drugColor + "50",
      marginBottom: 10,
      flexDirection: "row",
      paddingLeft: 20,
      paddingTop: 5,
      paddingBottom: 5,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2
    },
    textWrapper: {
      marginLeft: 10
    },
    drugName: {
      fontWeight: "bold"
    },
    drugDosage: {},
    imageStyle: {
      width: 40,
      height: 40,

    },
    iconStyle: {
      padding: 15,
      width: 25,
      height: 25
    }
  });
};

class DrugInEvent extends Component{
  // let styles = createStyles(drug.color);
  state = {
    modalVisible: false,
    styles: createStyles(this.props.drug.color)
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  }

  render(){
    const { drug } = this.props;
    const { styles, modalVisible } = this.state;
    const color = drug.color;
    const lighterColor = getFadedFromHex(color);
    return (
        <View>
          <Modal
            // animationType="slide"
            animationInTiming = {300}
            transparent={true}
            visible={this.state.modalVisible}
            // presentationStyle="formSheet"
            onRequestClose={() => {
              console.log("modal is closed");
              }
            }
            >
            <View style={{
                  // flex: 1,
                  justifyContent: 'space-between',
                  // alignItems: 'stretch',
                  backgroundColor: 'white',
                  borderRadius: 20,
                  // borderWidth: 2,
                  // padding: 10,
                  // width: '80%',
                  height:'60%',
                  
                  }}>

                  <View style={{ 
                      borderTopLeftRadius: 20, 
                      borderTopRightRadius:20, 
                      backgroundColor: lighterColor,
                      height: '15%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 20
                      }}>
                    

                      <TouchableHighlight
                          onPress={() => {
                            this.setModalVisible(false);
                          }}>
                          <Image source={CloseButton} style={{width: 34, height: 34}} />
                      </TouchableHighlight>

                      <Image source={EditIcon} style={styles.imageStyle} />
                      
                  </View> 

                  <View style={{
                    backgroundColor: 'white',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 30,
                    // borderWidth: 2,
                    height: '30%'
                  }}>
                    <TouchableHighlight
                      style = {{
                        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                        width: Dimensions.get('window').width * 0.15,
                        height: Dimensions.get('window').width * 0.15,
                        backgroundColor: lighterColor,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      underlayColor = '#ccc'
                    >
                      <DrugIcon color={drug.color} />
                    </TouchableHighlight>
                    
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{drug.name}</Text>
                    
                  </View>

                  <View style={{
                      height: '30%',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between'
                      // borderWidth: 2,

                  }}>
                      <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}>
                        <Image source={TimeIcon} style={styles.iconStyle} />
                        <View style={{padding: 5}}>
                          <Text style={{fontSize: 15}}> Scheduled for 9:30 AM, today, Oct 8 (Hardcoded) </Text>
                        </View>
                      </View>

                      <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                      }}>
                        <Image source={DosageIcon} style={styles.iconStyle} />
                        <View style={{padding: 5}}>
                          <Text style={{fontSize: 15}}>{drug.dosage}</Text>
                        </View>
                        
                      </View>

                      <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                      }}>
                        <Image source={NotesIcon} style={styles.iconStyle} />
                        <View style={{padding: 5}}>
                          <Text style={{fontSize: 15}}> Additional Notes </Text>
                        </View>
                      </View>
                  </View>

                  <View style={{
                      height: '15%',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      // borderWidth: 2,
                  }}>

                    <View style={{
                      alignItems: 'center'
                    }}>
                      <Image source={SkipButton} style={styles.imageStyle} />
                      <Text> Skip </Text>
                    </View>

                    <View style={{
                      alignItems: 'center'
                    }}>
                      <Image source={TakeButton} style={styles.imageStyle} />
                      <Text> Take </Text>
                    </View>

                    <View style={{
                      alignItems: 'center'
                    }}>
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
    };
}



export default DrugInEvent;
