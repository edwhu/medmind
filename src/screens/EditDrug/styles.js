import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 200,
    height: 40
  },
  footerStyle: {
    flex: 1,
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
