import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';

export default styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    height: '100%',
  },
  calendarWrapper: {
  },
  text: {
    textAlign: 'center',
    color: 'black'
  },
  logo: {
    width: 300,
    height: 300
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue'
  },
  Button: {
    width: 30,
    height: 30,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: "lightgrey",
    marginLeft: 5
  },

  pressedButton: {
    backgroundColor: medmindBlue
  },

  unpressedIcon: {
    width: 20,
    height: 20,
    backgroundColor: "lightgrey",
    borderRadius: 20
  },

  pressedIcon: {
    width: 20,
    height: 20,
    backgroundColor: medmindBlue,
    borderRadius: 20,

  }
}
,);