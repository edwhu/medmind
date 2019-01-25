import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';

export default styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', 
    height: 40, 
    alignItems: 'center'
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: 'lightgrey',
    marginLeft: 10
  },
  radioButtonActive: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: medmindBlue,
    marginLeft: 10
  }
});
