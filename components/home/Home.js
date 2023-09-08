import React, { useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import Card from "./card";
import cardData from "./cardData";
import homeStyles from "./homeStyles";
import { useFonts } from "expo-font";
import NewFooter from "../newFooter/NewFooter";
import Header from "../header/Header";
import { useNavigation } from "@react-navigation/native";
import BackgroundAndOverlay from "../reusable/BackgroundAndOverlay";
const Home = () => {
  const [loaded] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
    Roboto: require("../../assets/fonts/Roboto-Black.ttf"),
  });
  const navigation = useNavigation();
  useEffect(() => {
    if (!loaded) {
      return;
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }

  const navigateToMainPage = (card) => {
    console.log("Navigating to:", card.id);
    if (card.id === 1) {
      console.log("Navigating to OurServices");
      navigation.navigate("OurServices");
    } else if (card.id === 2) {
      navigation.navigate("Appointment");
    } else if (card.id === 3) {
      navigation.navigate("Emergency");
    } else if (card.id === 4) {
      navigation.navigate("Map");
    } else if (card.id === 5) {
      navigation.navigate("Review");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundAndOverlay>
        <View style={homeStyles.container}>
          <Header />
          <View style={homeStyles.cardContainer}>
            {cardData.map((card) => {
              console.log("Card ID:", card.id);

              return (
                <TouchableOpacity
                  key={card.id}
                  onPress={() => navigateToMainPage(card)}
                >
                  <Card
                    id={card.id}
                    picture={card.picture}
                    title={card.title}
                    text={card.text}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <NewFooter />
        </View>
      </BackgroundAndOverlay>
    </SafeAreaView>
  );
};

export default Home;
