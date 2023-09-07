import { StyleSheet } from "react-native";

const FooterStyles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "rgb(255, 255, 255)",
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    position: "absolute",
    bottom: 0,
  },
  iconContainer: {
    margin: 10,
  },
  iconText: {
    fontFamily: "Roboto",
    fontWeight: 600,
  },
});

export default FooterStyles;
