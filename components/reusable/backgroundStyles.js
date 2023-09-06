import { StyleSheet } from "react-native";
const backgroundStyle = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(999, 999, 999, 0.3)",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },
});
export default backgroundStyle;
