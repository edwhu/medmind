import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../../constants/styles';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 1,
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    top: 0,
    marginBottom: 30
    // bottom: 20,
  },
  calendarSwiper: {
    // backgroundColor: 'blue',
  },
  button: {
    position: 'absolute',
    width: 74,
    height: 74,
    borderRadius: 37,
    bottom: 24,
    right:30,
    backgroundColor: medmindBlue,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 3, width: 3 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 2, //IOS
    elevation: 10, // Android
  },
  plus: {
    color: 'white',
    fontSize: 55,
    marginBottom: 6,
    fontWeight: '200'
  }
});
