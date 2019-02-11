import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  repeatContainer:{
    borderBottomColor: medmindBlue, 
    borderBottomWidth: 1, 
    height: 100, 
    marginHorizontal: 15, 
    marginTop: 20,
  },
  weekdayContainer: {
    borderBottomColor: 'lightgrey', 
    borderBottomWidth: 1, 
    height: 100, 
    marginHorizontal: 15,
  },
  occuranceContainer: {
    marginHorizontal: 15, 
    marginTop: 15, 
    borderBottomColor: 'lightgrey', 
    borderBottomWidth: 1, 
    height: 150,
  },
  text: {
    marginTop: 10,
    color: '#333333',
    fontSize: 15,
    marginBottom: 10,
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
    backgroundColor: "blue",
    width: 20,
    height: 20,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 20
  }}
,);