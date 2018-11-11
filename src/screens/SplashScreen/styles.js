import { StyleSheet } from "react-native";
import { medmindBlue } from "../../constants/styles";

export default (styles = StyleSheet.create({
  container: {
    backgroundColor: medmindBlue,
    height: "100%"
  },
  logo: {
    height: 100,
    margin: "auto",
    marginTop: "40%"
  },
  text: {
    textAlign: "center",
    color: "white",
    paddingTop: "10%",
    fontSize: 50
  },
  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: 0
  }
}));
