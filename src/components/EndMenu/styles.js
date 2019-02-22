import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';

export default styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    marginLeft: 10,
  },
  radioButtonActive: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: medmindBlue,
    marginLeft: 10,
  },
  text: {
    color: '#333333',
    fontSize: 14,
    marginLeft: 10,
  },
  lightText: {
    color: '#5B6571',
    borderBottomColor: medmindBlue,
    borderBottomWidth: 1,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  dateLabel: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
