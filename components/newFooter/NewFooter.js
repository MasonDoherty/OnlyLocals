import React, { useEffect, useState } from "react";
import FooterStyles from "./newFooterStyles";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font"; // Import Font from expo-font

const Footer = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        roboto: require("../../assets/fonts/Roboto-Black.ttf"),
        // Add more fonts if needed
      });

      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  const navigateHome = () => {
    navigation.navigate("Home");
  };
  const navigateAppointment = () => {
    navigation.navigate("Appointment");
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={FooterStyles.footerContainer}>
      <View style={FooterStyles.iconContainer}>
        <TouchableOpacity onPress={navigateHome}>
          <Icon name="home" type="material" size={30} color="black" />
          <Text style={FooterStyles.iconText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={FooterStyles.iconContainer}>
        <TouchableOpacity onPress={navigateAppointment}>
          <Icon name="event" type="material" size={30} color="black" />
          <Text style={FooterStyles.iconText}>Schedule</Text>
        </TouchableOpacity>
      </View>
      <View style={FooterStyles.iconContainer}>
        <TouchableOpacity>
          <Icon name="help" type="material" size={30} color="black" />
          <Text style={FooterStyles.iconText}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
