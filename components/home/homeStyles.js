import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 30,
  },
});

export default homeStyles;
