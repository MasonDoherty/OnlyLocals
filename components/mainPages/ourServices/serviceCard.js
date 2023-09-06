import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import cardStyles from "./cardStyles.js";
import { useNavigation } from "@react-navigation/native";
const Card = ({ id, picture, title, text }) => {
  const navigation = useNavigation();
  const NavToDetails = () => {
    navigation.navigate("Details");
  };
  return (
    <TouchableOpacity onPress={NavToDetails}>
      <View style={cardStyles.cardContainer}>
        <Image source={picture} style={cardStyles.image} />
        <View style={cardStyles.textContainer}>
          <Text style={cardStyles.title}>{title}</Text>
          <Text style={cardStyles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
