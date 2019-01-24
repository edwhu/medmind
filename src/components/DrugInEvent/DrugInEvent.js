import React, { Component } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image
} from "react-native";
import DrugIcon from "../DrugIcon/DrugIcon";

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
    drugDosage: {}
  });
};

class DrugInEvent extends Component{
  // let styles = createStyles(drug.color);
  state = {
    modalVisible: false,
    styles: createStyles(this.props.drug.color)
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
  return (
      <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight onPress={() => { 
        this.setModalVisible(true);
      }}>
        <View style={this.state.styles.container}>
          <DrugIcon color={this.props.drug.color} scale={1.8} />
          <View style={this.state.styles.textWrapper}>
            <Text style={this.state.styles.drugName}>{this.props.drug.name}</Text>
            <Text style={this.state.styles.drugDosage}>{this.props.drug.dosage}</Text>
          </View>
        </View>
      </TouchableHighlight>
      </View>
    );
  };
}



export default DrugInEvent;
