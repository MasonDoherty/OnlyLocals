import { StyleSheet } from "react-native";

const landingPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(999, 999, 999, 0.3)",
    justifyContent: "flex-Start",
    alignItems: "center",
    overflow: "hidden",
  },
  darkBox: {
    backgroundColor: "rgba(238, 238, 238, .54)",
    padding: 20,
    height: 185,
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
  subtitle: {
    fontSize: 16,
    color: "#000000",
    fontFamily: "Roboto",
  },
  buttonContainer: {
    marginTop: 200,
    alignItems: "center",
  },

  clickableButton: {
    backgroundColor: "rgba(999, 999, 999, 0.85)",
    padding: 20,
    height: 75,
    width: 335,
    borderRadius: 10,
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 30,
    color: "#000000",
    fontWeight: 700,
    fontFamily: "roboto",
  },
});

export default landingPageStyles;
