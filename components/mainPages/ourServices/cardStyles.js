import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "rgba(248, 248, 248, 0.68)",
    width: "100%",
    height: 97,
    // borderColor: "black",
    // borderWidth: 1,
    // borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    height: 75,
    width: 100,
    borderRadius: 15,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    maxHeight: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  text: {
    fontSize: 14,
    paddingBottom: 8,
  },
});

export default cardStyles;
