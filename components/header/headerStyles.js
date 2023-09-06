import { StyleSheet } from "react-native";
const HeaderStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "rgb(255, 255, 255)",
    height: 70,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    elevation: 5,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
  },
  headerText: {
    fontFamily: "staatliches",
    fontWeight: "800",
    fontSize: 36,
    margin: 0,
    letterSpacing: 6,
  },
  userPhoto: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginRight: 5,
    paddingTop: 7,
    borderColor: "black",
    borderWidth: 1,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    marginLeft: 5,
  },
});
export default HeaderStyles;
