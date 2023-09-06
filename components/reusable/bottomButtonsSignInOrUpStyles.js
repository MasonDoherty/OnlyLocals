import { StyleSheet } from "react-native";
import BottomButtons from "./bottomButtonsSignInOrUp";

const bottomButtonsSignInOrUpStyles = StyleSheet.create({
  clickableButton: {
    backgroundColor: "#000000",
    padding: 20,
    height: 23,
    width: 214,
    borderRadius: 25,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "roboto",
    height: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  line: {
    flex: 1,
    height: 5,
    width: 150,
    backgroundColor: "gray",
    marginHorizontal: 10,
  },
  orText: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "roboto",
    marginHorizontal: 10,
  },
});
export default bottomButtonsSignInOrUpStyles;
