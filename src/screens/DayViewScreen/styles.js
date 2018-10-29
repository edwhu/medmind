import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBFBFB",
    // backgroundColor: '#999999',
    height: "100%"
  },
  dayVerticalListWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: "auto"
  },
  dayVerticalList: {
    backgroundColor: "white",
    height: "auto",
    width: "auto",
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  text: {
    margin: 10
  }
}));
