import React, { Component } from 'react';
import { Modal, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import CollapsibleDatePicker from '../../components/CollapsibleDatePicker/CollapsibleDatePicker';
import FormField from '../../components/FormField/FormField';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { KeyboardAvoidingView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { medmindBlue } from '../../constants/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDrug } from '../../redux/actions/drug';
import moment from 'moment';
import ColorPicker from '../../components/ColorPicker/ColorPicker';


class AddDrugScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions =({navigation})=> ({
    headerTitle: 'Enter Drug',
    headerTitleStyle: {
      color: 'white',
      fontWeight: '500',
      fontFamily: 'System',
      fontSize: 24,
      flex: 1,
      textAlign: "center",
      marginRight: "23%",
    },  
    headerLeft: <TouchableOpacity 
                  onPress={() => navigation.dangerouslyGetParent().navigate("timelineScreen")}
                  style={styles.back}
                >
                  <View>
                    <Text style={styles.text}>
                      Back
                    </Text>
                  </View>
                </TouchableOpacity>,
    headerRight: null
  });
  state = {
    name: "Bevacizumab",
    dosage: "500mg",
    doctor: "Dr. Who",
    frequency: "5x a day", 
    startDate: moment().subtract(10, "days"),
    endDate: moment().add(10, "days"),
    color: '#AD2452',
    modalVisible: false,
    colorPicked: false,
  };
  resetColor() {
    this.setState({
      color: '#AD2452',
      colorPicked: false,
    });
  }
  hideModal() {
    this.setState({modalVisible: false});
  }
  showModal() {
    this.setState({modalVisible: true});
  }
  onSubmit() {
    this.resetColor();
    const {navigate} = this.props.navigation;
    this.props.addDrug(this.state);
    navigate('timelineScreen');
  }
  onOK(selectedColor) {
    this.setState({
      colorPicked: true,
      color: selectedColor});
    this.hideModal();
  }
  
  render() {
    const color = {backgroundColor: this.state.color};
    return (
      <KeyboardAvoidingView style={styles.container}>
        <FormField
          header="Drug Name"
          onChange={name => this.setState({ name })}
          value={this.state.name}
          placeholder={this.state.name}
        />
        <FormField
          header="Dosage"
          onChange={dosage => this.setState({ dosage })}
          value={this.state.dosage}
          placeholder={this.state.dosage}
        />
        <FormField
          header="Doctor"
          onChange={doctor => this.setState({ doctor })}
          value={this.state.doctor}
          placeholder={this.state.dosage}
        />
        <FormField
          header="Frequency"
          onChange={frequency => this.setState({ frequency })}
          value={this.state.frequency}
          placeholder={this.state.frequency}
        />
        <FormField 
          header="As Needed"
          value={this.state.asNeeded}
          onChange={asNeeded => this.setState({ asNeeded })}
          type="checkbox"
        />
        { !this.state.asNeeded && <CollapsibleDatePicker
          header="Start Date"
          setDate={startDate => this.setState({ startDate })}
          date={this.state.startDate}
        /> }
        { !this.state.asNeeded && <CollapsibleDatePicker
          header="End Date"
          setDate={endDate => this.setState({ endDate })}
          date={this.state.endDate}
        /> }

        <View style={styles.form}>
          <View style={styles.fieldContainer}>
            <Text>Colors</Text>
            {!this.state.colorPicked && (
              <TouchableOpacity
                onPress = {() => {
                  this.showModal();
                }}
                hitSlop={{left: 100}}
              >
                <Ionicons name="ios-arrow-forward" size={16} />
              </TouchableOpacity>
            )}
            {this.state.colorPicked && (
              <TouchableOpacity
                onPress = {this.showModal}
                hitSlop={{left: 100}}
                style={[styles.colorButton, color]}
              />
            )}
          </View>
        </View>

        <Modal
          visible={this.state.modalVisible}
          onRequestClose = {() => {this.hideModal();}}
          transparent={true}
          style = {styles.modalContainer}
        >
          <View elevation = {5} style = {styles.container2}>
            <ColorPicker
              defaultColor={this.state.color}
              ref={'colorpicker'}
            />
            <View style = {styles.container3}>
              <TouchableOpacity
                onPress={this.hideModal}
              >
                <Text style = {styles.textStyle}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.onOK(this.refs['colorpicker'].state.value);
                }}
              >
                <Text style = {styles.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.form}>
          <View style={styles.fieldContainer}>
            <Text>Notifications</Text>
            <Ionicons name="ios-arrow-forward" size={16} />
          </View>
        </View>

        <View style={styles.footerStyle}>
          <RoundedButton
            onPress={() => this.onSubmit()}
            name={'Submit'}
            buttonStyle={styles.buttonStyle}
          />
        </View>
        
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addDrug }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(AddDrugScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  modalContainer: {
  },
  container2: {
    flex: 0.50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 15,
    top: '25%',
    left: '7.5%',
  },
  container3: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    left: '23%',
  },
  textStyle: {
    color: medmindBlue,
    fontSize: 14
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 200,
    height: 40
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  back: {
    marginLeft: 10,
  },
  colorButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    width:30,
    height:30,
    borderRadius:15,
  button: {
    borderWidth: 2,
    borderColor: 'gray',
    alignSelf: 'center',
    width: 50,
    height: 37
  },
  colorButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    width:30,
    height:30,
    borderRadius:15,
  },
  footerStyle: {
    flex: 1,
    // borderColor: 'black',
    // borderWidth: 5,
    height: 80,
    flexGrow: 1,
    justifyContent: 'center'
  },
  form: {
    height: 40,
    borderColor: medmindBlue,
    borderBottomWidth: 1,
    marginHorizontal: 20
  },
  fieldContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
