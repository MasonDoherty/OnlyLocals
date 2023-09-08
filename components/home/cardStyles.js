import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "rgba(248, 248, 248, 0.68)",
    width: "100%",
    height: 97,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  image: {
    height: 75,
    width: 100,
    borderRadius: 15,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    paddingBottom: 8,
  },
});

export default cardStyles;
