import { StyleSheet } from "react-native";
const appointmentStyles = StyleSheet.create({
  darkBox: {
    backgroundColor: "rgba(238, 238, 238, .54)",
    padding: 20,
    height: 90,
    width: 230,
    borderRadius: 30,
    margin: 30,
    alignItems: "center",
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
  calendarContainer: {
    backgroundColor: "rgba(238, 238, 238, .8)",
    marginHorizontal: 100,
  },
  calendar: {
    margin: 100,
  },
  messageBox: {
    backgroundColor: "rgba(238, 238, 238, .74)",
    padding: 20,
    height: 90,
    width: 350,
    borderRadius: 30,
    margin: 20,
    alignItems: "center",
  },
  messageText: {
    fontSize: 20,
    fontWeight: 600,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    width: 200,
    height: 35,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "rgb(255,255,255)",
    fontWeight: 700,
    letterSpacing: 2,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
});
export default appointmentStyles;
