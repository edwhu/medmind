import { StyleSheet } from "react-native";
import { medmindBlue } from "../../constants/styles";

export default (styles = StyleSheet.create({
  heading: {
    height: 80,
    backgroundColor: medmindBlue,
    width: "100%"
  },
  container: {
    backgroundColor: "#FBFBFB",
    height: "100%"
  },
  title: {
    fontSize: 22,
    fontFamily: "System",
    color: "rgb(160,160,160)",
    marginTop: 10
  },
  scrollView: {
    width: "100%",
    height: "auto"
  },
  flatList: {},
  separator: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  alphabetList: {},
  alphabetSeparator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  alphabetSeparatorText: {
    color: "#6E7782",
    fontSize: 20,
    marginRight: 15
  },
  alphabetSeparatorLine: {
    width: "82%",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1
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
}));
