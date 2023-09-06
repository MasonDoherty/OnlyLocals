import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./components/navigator/MainStackNavigator";
import * as Font from "expo-font";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import appStyles from "./components/appStyles/appStyles";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loaded] = useFonts({
    bebasNeue: require("./assets/fonts/BebasNeue-Regular.ttf"),
    roboto: require("./assets/fonts/Roboto-Black.ttf"),
  });

  // Check if fonts are loaded
  useEffect(() => {
    if (loaded) {
      // Fonts are loaded, set isLoading to false
      setIsLoading(false);
    }
  }, [loaded]);

  // Simulate loading for 2 seconds (you can replace this with your actual loading logic)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <ImageBackground
        source={require("./assets/images/landingpagebg.jpg")}
        style={appStyles.imageBackground}
      >
        <MainStackNavigator />
      </ImageBackground>
    </NavigationContainer>
  );
};

export default App;
