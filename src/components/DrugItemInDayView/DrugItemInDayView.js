import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import DrugIcon from '../../components/DrugIcon/DrugIcon';
import DrugPopup from '../../components/DrugPopup/DrugPopup';

class DrugItemInDayView extends Component{
  state = {
    modalVisible: false,
    editFormVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    const { drug } = this.props;
    const styles = createStyles();

    return (
      <View>
        <DrugPopup drug={drug} 
          navigation={this.props.navigation} 
          visible={this.state.modalVisible} 
          onClose={()=>this.setModalVisible(false)}/>
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

const createStyles = () => {
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
  });
};

export default DrugItemInDayView;
