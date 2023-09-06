import { StyleSheet } from "react-native";

const backgroundStyles = StyleSheet.create({
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
    backgroundColor: "rgba(999, 999, 999, 0.6)",
    justifyContent: "flex-Start",
    alignItems: "center",
    overflow: "hidden",
  },
});
export default backgroundStyles;
