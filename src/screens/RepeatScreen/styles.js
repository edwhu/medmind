import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  horizontalLine: {
    borderWidth: 0.65,
    borderColor: "#E5E5E5",
    width: "92%",
    alignSelf: "center",
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  setting: {
    fontSize: 15,
    color: "#333333",
    fontWeight: "400",
    left: 20,
    position: "absolute",
  },
  entry: {
    fontSize: 15,
    color: "#5B6571",
    fontWeight: "400",
    right: 20,
    position: "absolute",
  },
  button: {
    backgroundColor: "white",
    right: 20,
    position: "absolute",
  },
  arrowButton: {
    fontSize: 35,
    color: "#BDBDBD",
    fontWeight: "300",
  },
})