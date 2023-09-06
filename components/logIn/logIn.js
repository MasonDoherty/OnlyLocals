import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import logInStyles from "./logInStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomButtons from "../reusable/bottomButtonsSignInOrUp";

const LogIn = () => {
  return (
    <SafeAreaView style={logInStyles.container}>
      <ImageBackground
        source={require("../../assets/images/landingpagebg.jpg")}
        style={logInStyles.imageBackground}
      >
        <View style={logInStyles.overlay}>
          <KeyboardAwareScrollView
            contentContainerStyle={logInStyles.overlay}
            resetScrollToCoords={{ x: 0, y: 0 }} // Adjust this if needed
            scrollEnabled={true}
          >
            <View style={logInStyles.darkBox}>
              <Text style={logInStyles.title}>Welcome</Text>
              <Text style={logInStyles.title}>Back.</Text>
            </View>
            <View style={logInStyles.bottomPortion}>
              <View>
                <View style={logInStyles.inputContainer}>
                  <Icon name="email" type="material" size={24} color="gray" />
                  <TextInput placeholder="Email" style={logInStyles.input} />
                </View>
                <View style={logInStyles.inputContainer}>
                  <Icon name="lock" type="material" size={24} color="gray" />
                  <TextInput placeholder="Password" style={logInStyles.input} />
                </View>
              </View>
              <BottomButtons />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LogIn;
