import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Styles from "./reviewStyles";
import Header from "../../header/Header";
import NewFooter from "../../newFooter/NewFooter";
import BackgroundAndOverlay from "../../reusable/BackgroundAndOverlay";

const Review = () => {
  return (
    <SafeAreaView>
      <BackgroundAndOverlay>
        <Header />

        <NewFooter />
      </BackgroundAndOverlay>
    </SafeAreaView>
  );
};
export default Review;
