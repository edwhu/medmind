import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import DrugIcon from '../DrugIcon/DrugIcon';
import { createStyles } from './styles';
import DrugPopup from '../../components/DrugPopup/DrugPopup';

class DrugInEvent extends Component{
  state = {
    modalVisible: false,
    editFormVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render(){
    const { drug } = this.props;
    const color = drug.color;
    const styles = createStyles(color);
    return (
      <View>

        <DrugPopup drug={drug} navigation={this.props.navigation} visible={this.state.modalVisible} onClose={()=>this.setModalVisible(false)}/>

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
