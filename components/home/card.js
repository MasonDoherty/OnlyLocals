import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import cardStyles from "./cardStyles.js";
const Card = ({ id, picture, title, text }) => {
  return (
    <View style={cardStyles.cardContainer}>
      <Image source={picture} style={cardStyles.image} />
      <View style={cardStyles.textContainer}>
        <Text style={cardStyles.title}>{title}</Text>
        <Text style={cardStyles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Card;
