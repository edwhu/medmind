import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';

export default styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    alignContent: 'center',
  },
  picker: {
    width: 100,
    marginLeft: 3,
  },
  downArrow: {
    color: medmindBlue,
    fontSize: 20,
    marginLeft: 5,
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
}
,);