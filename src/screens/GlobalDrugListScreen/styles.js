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
  }
}));
