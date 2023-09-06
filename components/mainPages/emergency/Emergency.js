import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Styles from "./emergencyStyles";
import Header from "../../header/Header";
import NewFooter from "../../newFooter/NewFooter";
import BackgroundAndOverlay from "../../reusable/BackgroundAndOverlay";

const Emergency = () => {
  return (
    <SafeAreaView>
      <BackgroundAndOverlay>
        <Header />

        <NewFooter />
      </BackgroundAndOverlay>
    </SafeAreaView>
  );
};
export default Emergency;
