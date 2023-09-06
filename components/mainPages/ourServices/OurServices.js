import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Styles from "./ourServicesStyles";
import Header from "../../header/Header";
import NewFooter from "../../newFooter/NewFooter";
import BackgroundAndOverlay from "../../reusable/BackgroundAndOverlay";
import ServiceCard from "./serviceCard";
import servicesData from "../../data/servicesData";

const OurServices = () => {
  return (
    <SafeAreaView>
      <BackgroundAndOverlay>
        <Header />
        <View style={Styles.darkBox}>
          <Text style={Styles.title}> Our Services</Text>
        </View>

        <View style={Styles.contentContainer}>
          <ScrollView>
            {servicesData.map((card) => {
              return (
                <ServiceCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  text={card.text}
                  picture={card.picture}
                />
              );
            })}
          </ScrollView>
        </View>

        <NewFooter />
      </BackgroundAndOverlay>
    </SafeAreaView>
  );
};

export default OurServices;
