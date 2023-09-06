import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import style from "./bottomButtonsSignInOrUpStyles";
import { useNavigation } from "@react-navigation/native";

const BottomButtons = () => {
  const navigation = useNavigation();
  const navigateToLogIn = () => {
    navigation.navigate("LogIn");
  };
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity onPress={navigateToLogIn}>
        <View style={style.clickableButton}>
          <Text style={style.buttonText}>Log In</Text>
        </View>
      </TouchableOpacity>
      <View style={style.lineContainer}>
        <View style={style.line} />
        <Text style={style.orText}>or</Text>
        <View style={style.line} />
      </View>

      <TouchableOpacity onPress={navigateToSignUp}>
        <View style={style.clickableButton}>
          <Text style={style.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default BottomButtons;
