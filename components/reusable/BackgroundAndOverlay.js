import React from "react";
import { ImageBackground, View } from "react-native";
import backgroundStyle from "./backgroundStyles";
const BackgroundAndOverlay = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/landingpagebg.jpg")}
      style={backgroundStyle.imageBackground}
    >
      <View style={backgroundStyle.overlay}>{children}</View>
    </ImageBackground>
  );
};
export default BackgroundAndOverlay;
