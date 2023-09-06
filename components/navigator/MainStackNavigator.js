import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "../landingPage/landingPage";
import LogIn from "../logIn/logIn";
import SignUp from "../signUp/signUp";
import Home from "../home/Home";
import OurServices from "../mainPages/ourServices/OurServices";
import Appointment from "../mainPages/appointment/Appointment";
import Emergency from "../mainPages/emergency/Emergency";
import Map from "../mainPages/map/Map";
import Review from "../mainPages/reviews/Review";
import Details from "../details/Details";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingPage}
        options={{ header: () => null }}
      />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="OurServices"
        component={OurServices}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Emergency"
        component={Emergency}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
