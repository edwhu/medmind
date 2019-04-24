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
    this.state = {
      name: this.props.drugName || '',
      dosage: '',
      doctor: '',
      frequency: '', 
      startDate: moment().subtract(10, 'days'),
      endDate: moment().add(10, 'days'),
      color: '#AD2452',
      modalVisible: false,
      colorPicked: false,
      nameError: false,
      dosageError: false,
      doctorError: false,
      frequencyError: false,
      mainError: null,
      asNeeded: false,
    };
  }
  static navigationOptions =({navigation})=> ({
    headerTitle: 'Enter Drug',
    headerTitleStyle: {
      color: 'white',
      fontWeight: '500',
      fontFamily: 'System',
      fontSize: 24,
      flex: 1,
      textAlign: 'right',
      marginRight: '23%',
    },  
    headerLeft: <TouchableOpacity 
      onPress={() => navigation.dangerouslyGetParent().navigate('timelineScreen')}
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

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.drugName!==prevState.name){
      return { name: nextProps.drugName};
    }
    return null;
  }
  resetColor = () => {
    this.setState({
      color: '#AD2452',
      colorPicked: false,
    });
  }
  hideModal= () => {
    this.setState({modalVisible: false});
  }
  showModal = () => {
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
        {!!this.state.mainError && (
          <View style={styles.container4}>
            <Text style={styles.mainError}>{this.state.mainError}</Text>
          </View>
        )}
        <FormField
          header="Drug Name"
          headerStyle={this.state.nameError ? styles.errorStyle : styles.headerStyle}
          onChange={(name) => {
            this.setState({ name, nameError: false, mainError: null});
          }}
          value={this.state.name}
          placeholder={this.state.name}
        />
        <FormField
          header="Dosage"
          headerStyle={this.state.dosageError ? styles.errorStyle : styles.headerStyle}
          onChange={(dosage) => {
            this.setState({ dosage, dosageError: false, mainError: null });
          }}
          value={this.state.dosage}
          placeholder={this.state.dosage}
        />
        <FormField
          header="Doctor"
          headerStyle={this.state.doctorError ? styles.errorStyle : styles.headerStyle}
          onChange={(doctor) => {
            this.setState({ doctor, doctorError: false, mainError: null });
          }}
          value={this.state.doctor}
          placeholder={this.state.doctor}
        />
        <FormField
          header="Frequency"
          headerStyle={this.state.frequencyError ? styles.errorStyle : styles.headerStyle}
          onChange={(frequency) => {
            this.setState({ frequency,
              frequencyError: false,
              mainError: null 
            });
          }}
          value={this.state.frequency}
          placeholder={this.state.frequency}
        />
        <FormField 
          header="As Needed"
          value={this.state.asNeeded}
          onChange={(asNeeded) => this.setState({ asNeeded })}
          type="checkbox"
        />
        { !this.state.asNeeded && <CollapsibleDatePicker
          style={styles.form}
          header="Start Date"
          setDate={(startDate) => this.setState({ startDate })}
          date={this.state.startDate}
        /> }
        { !this.state.asNeeded && <CollapsibleDatePicker
          style={styles.form}
          header="End Date"
          setDate={(endDate) => this.setState({ endDate })}
          date={this.state.endDate}
        /> }

        <View style={styles.form}>
          <View style={styles.fieldContainer}>
            <Text>Colors</Text>
            {!this.state.colorPicked && (
              <TouchableOpacity
                onPress = {this.showModal}
                hitSlop={{left: 100, top: 100, bottom: 100, right: 100}}
              >
                <Ionicons name="ios-arrow-forward" size={28} color='#BDBDBD' />
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
          onRequestClose = {this.hideModal}
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
            <Ionicons name="ios-arrow-forward" size={28} color='#BDBDBD' />
          </View>
        </View>

        <View style={styles.footerStyle}>
          <RoundedButton
            onPress={() => {
              let nameError = false;
              let dosageError = false;
              let doctorError = false;
              let frequencyError = false;
              let mainError = null;
              if(this.state.name.trim() === '') {
                nameError = true;
                mainError = 'Please fill out all fields';
              }
              if(this.state.dosage.trim() === '') {
                dosageError = true;
                mainError = 'Please fill out all fields';
              }
              if(this.state.doctor.trim() === '') {
                doctorError = true;
                mainError = 'Please fill out all fields';
              }
              if(this.state.frequency.trim() === '') {
                frequencyError = true;
                mainError = 'Please fill out all fields';
              }
              else {
                this.onSubmit();
              }
              this.setState({
                nameError,
                dosageError,
                doctorError,
                frequencyError,
                mainError
              });
            }}
            name={'Submit'}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.text}
          />
        </View>
        
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addDrug }, dispatch);

const mapStateToProps = (state) => {
  return {drugName: state.drugInfoReducer.drugName};
};
export default connect(
  mapStateToProps,
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
  container4: {
    flex: .3,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center'
  },
  textStyle: {
    color: medmindBlue,
    fontSize: 14
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 266,
    height: 46,
    borderRadius: 46,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.3
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'normal',
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
  },
  button: {
    borderWidth: 2,
    borderColor: 'gray',
    alignSelf: 'center',
    width: 50,
    height: 37
  },
  footerStyle: {
    flex: 1,
    // borderColor: 'black',
    // borderWidth: 5,
    height: 80,
    flexGrow: 1,
    justifyContent: 'center',
  },
  form: {
    height: 50,
    width: 'auto',
    borderColor: medmindBlue,
    borderBottomWidth: 1,
    marginHorizontal: 20
  },
  fieldContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerStyle: {
    fontSize: 15,
    color: 'black',
  },
  errorStyle: {
    fontSize: 15,
    color: 'red',
  },
  mainError: {
    fontSize: 16,
    color: 'red',
    flex: 1,
    height: 50,
    alignItems: 'center'
  }
});
