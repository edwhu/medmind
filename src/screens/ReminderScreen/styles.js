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
    left: 22
  },
  reminder: {
    height: 100,
    flexDirection: "row",
    alignItems: "center"
  },
  info: {
    marginLeft: 20
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
  plusButton: {
    backgroundColor: medmindBlue,
    width: 74,
    height: 74,
    borderRadius: 37,
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 24,
    right: 30
  },
  plus: {
    color:'white',
    fontSize: 55,
    marginBottom: 6,
    fontWeight: "200",
    color: "white",
    fontSize: 55,
    marginBottom: 6,
    fontWeight: "200"
  },
  edit: {
    marginLeft: 21
  },
  minusButton: {
    backgroundColor: medmindBlue,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  minus: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    bottom: 9
  },
  arrowButton: {
    fontSize: 35,
    color: "#BDBDBD",
    position: "absolute",
    right: 32
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  icon: {
    flexDirection: "row",
  },
  iconText: {
    color: medmindBlue,
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 12,
  },
  iconTextBody: {
    color: "#4F4F4F",
    fontSize: 18,
    marginLeft: 50,
    marginRight: 50,
  },
  smallPlus: {
    color: medmindBlue,
    fontSize: 28,
    fontWeight: "600",
  },
}));
