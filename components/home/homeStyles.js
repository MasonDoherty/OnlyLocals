import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
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
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },

  userPhoto: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginRight: 5,
    paddingTop: 7,
    borderColor: "black",
    borderWidth: 1,
    elevation: 3,
  },
  icon: {
    marginLeft: 5,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    margin: 10,
  },
});

export default homeStyles;
