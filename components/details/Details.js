import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../header/Header";
import BackgroundAndOverlay from "../reusable/BackgroundAndOverlay";
import NewFooter from "../newFooter/NewFooter";
const Details = () => {
  return (
    <SafeAreaView>
      <BackgroundAndOverlay>
        <Header />
        <View>
          <Text>hi</Text>
        </View>
        <NewFooter />
      </BackgroundAndOverlay>
    </SafeAreaView>
  );
};
export default Details;
