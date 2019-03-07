import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
  },
  picker: {
    width: 100,
    marginLeft: 3,
  },
  text: {
    color: '#333333',
    fontSize: 15,
  },
  lightText: {
    color: '#5B6571',
    borderBottomColor: medmindBlue,
    borderBottomWidth: 1,
    fontSize: 15,
  },
  repeatButton: {
    backgroundColor: '#E5E5E5',
    width: 110,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderRadius: 30,
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
  },
  option: {
    color: '#333333',
    fontSize: 15,
  },
  pressedButton: {
    backgroundColor: medmindBlue,
  },
  pressedText: {
    color: 'white',
  },
}
  ,);