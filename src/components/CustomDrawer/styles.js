import { StyleSheet } from "react-native";


export default (styles = StyleSheet.create({
  // profilePictureOuterContainer: {
  //   width: 80,
  //   height: 80,
  //   borderRadius: 40,
  //   borderWidth: 3
  // },
  outerBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 3,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#B0DFDF", 
    overflow:"hidden" 
  },
  innerBorder: {
    width: 73,
    height: 73,
    borderRadius: 36.5,
    borderWidth: 3,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#CDF0EF",
    overflow: "hidden",
  },
  profilePicture: {
    width: 70,
    height: 70,
  },
  text: {
    // textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontSize: 14
  },
  drawerBackground: {
    backgroundColor: "#65C0BE",
    flex: 1
  },
  topPart: {
    alignItems: "center",
    padding: "5.1%"
  },
  pad: {
    padding: "1.5%"
  },
}));
