import { StyleSheet } from "react-native";
import { medmindBlue } from "../../constants/styles";

export default (styles = StyleSheet.create({
  container: {
    backgroundColor: medmindBlue,
    height: "100%",
    // flex: 1,
    zIndex: -1
  },
  text: {
    textAlign: "center",
    color: "black"
  },
  calendarSwiper: {
    // backgroundColor: 'blue',
  },
  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: 0
  }
}));
