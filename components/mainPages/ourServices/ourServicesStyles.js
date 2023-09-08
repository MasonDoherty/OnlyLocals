import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const window = Dimensions.get("window");
const windowHeight = window.height;
const OurServicesStyles = StyleSheet.create({
  darkBox: {
    backgroundColor: "rgba(238, 238, 238, .54)",
    padding: 20,
    height: 90,
    width: 335,
    borderRadius: 10,
    margin: 30,
  },
  title: {
    fontSize: 64,
    color: "#000000",
    fontWeight: 700,
    lineHeight: 64,
    margin: 0,
    fontFamily: "bebasNeue",
    overflow: "visible",
  },
  cardContainer: {
    flex: 1,
    width: width - 20,
    marginHorizontal: 5,
    maxHeight: windowHeight - 70,
  },
});
export default OurServicesStyles;
