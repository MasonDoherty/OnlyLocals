import React from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import backgroundStyles from "./backgroundStyles";
const Background = () => {
  return (
    <SafeAreaView style={backgroundStyles.container}>
      <ImageBackground
        source={require("../../assets/images/landingpagebg.jpg")}
        style={backgroundStyles.imageBackground}
      >
        <View style={backgroundStyles.overlay}></View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Background;
