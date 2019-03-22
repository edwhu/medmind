import { StyleSheet } from "react-native";
import { medmindBlue } from "../../constants/styles";

export default StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFB',
    // backgroundColor: '#999999',
    height: '100%'
  },
  dayVerticalListWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: 'auto'
  },
  dayVerticalList: {
    backgroundColor: 'white',
    height: 'auto',
    width: 'auto',
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  text: {
    margin: 10
  },
  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: "15.2%"
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
    color: "white",
    fontSize: 55,
    marginBottom: 6,
    fontWeight: "200"
  }
});
