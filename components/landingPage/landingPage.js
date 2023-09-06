import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import landingPageStyles from "./landingPageStyles";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const LandingPage = () => {
  const navigation = useNavigation();
  const navigateToLogIn = () => {
    navigation.navigate("LogIn");
  };
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const [loaded] = useFonts({
    staatliches: require("../../assets/fonts/BebasNeue-Regular.ttf"),
    Roboto: require("../../assets/fonts/Roboto-Black.ttf"),
  });

  useEffect(() => {
    if (!loaded) {
      return;
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={landingPageStyles.container}>
      <ImageBackground
        source={require("../../assets/images/landingpagebg.jpg")}
        style={landingPageStyles.imageBackground}
      >
        <View style={landingPageStyles.overlay}>
          <View style={landingPageStyles.darkBox}>
            <Text style={landingPageStyles.title}>ONLY</Text>
            <Text style={landingPageStyles.title}>LOCALS.</Text>
            <Text style={landingPageStyles.subtitle}>
              Your local HVAC experts
            </Text>
          </View>
          <View style={landingPageStyles.buttonContainer}>
            <TouchableOpacity onPress={navigateToLogIn}>
              <View style={landingPageStyles.clickableButton}>
                <Text style={landingPageStyles.buttonText}>Log In</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToSignUp}>
              <View style={landingPageStyles.clickableButton}>
                <Text style={landingPageStyles.buttonText}>
                  Create A Profile
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToHome}>
              <View style={landingPageStyles.clickableButton}>
                <Text style={landingPageStyles.buttonText}>
                  Continue As Guest
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LandingPage;
