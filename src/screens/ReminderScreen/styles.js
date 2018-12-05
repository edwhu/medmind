import { StyleSheet } from "react-native";
import { medmindBlue } from "../../constants/styles";

export default (styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%"
  },
  drug: {
    height: 60,
    flexDirection: "row",
    alignItems: "center"
  },
  drugName: {
    fontSize: 20,
    color: "black",
    position: "absolute",
    left: 22
  },
  reminder: {
    height: 100,
    flexDirection: "row",
    alignItems: "center"
  },
  info: {
    position: "absolute",
    left: 20
  },
  timeContainer: {
    flexDirection: "row"
  },
  timeLabel: {
    fontSize: 38,
    color: "#545f66",
    fontWeight: "300",
    marginLeft: 4
  },
  timeMidday: {
    fontSize: 28,
    color: "#545f66",
    marginTop: 9,
    fontWeight: "300"
  },
  detailsContainer: {
    flexDirection: "row"
  },
  details: {
    fontSize: 15,
    color: "#36454f",
    fontWeight: "400"
  },
  horizontalLine: {
    borderWidth: 0.65,
    borderColor: "#E0E0E0",
    width: "90%",
    alignSelf: "center"
  },
  switchButton: {
    position: "absolute",
    right: 32,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
  },
  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginLeft: "15.2%"
  }
}));
