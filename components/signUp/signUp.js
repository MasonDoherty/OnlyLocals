import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomButtons from "../reusable/bottomButtonsSignInOrUp";
import signUpStyles from "./signUpStyles";
const LogIn = () => {
  return (
    <SafeAreaView style={signUpStyles.container}>
      <ImageBackground
        source={require("../../assets/images/landingpagebg.jpg")}
        style={signUpStyles.imageBackground}
      >
        <View style={signUpStyles.overlay}>
          <KeyboardAwareScrollView
            contentContainerStyle={signUpStyles.overlay}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
          >
            <View style={signUpStyles.darkBox}>
              <Text style={signUpStyles.title}>Create</Text>
              <Text style={signUpStyles.title}>A</Text>
              <Text style={signUpStyles.title}>Profile.</Text>
            </View>
            <View style={signUpStyles.bottomPortion}>
              <View>
                <View style={signUpStyles.inputContainer}>
                  <Icon name="person" type="material" size={24} color="gray" />
                  <TextInput
                    placeholder="First Name"
                    style={signUpStyles.input}
                  />
                </View>
                <View style={signUpStyles.inputContainer}>
                  <Icon name="person" type="material" size={24} color="gray" />
                  <TextInput
                    placeholder="Last Name"
                    style={signUpStyles.input}
                  />
                </View>
                <View style={signUpStyles.inputContainer}>
                  <Icon name="phone" type="material" size={24} color="gray" />
                  <TextInput
                    placeholder="Phone Number"
                    style={signUpStyles.input}
                  />
                </View>
                <View style={signUpStyles.inputContainer}>
                  <Icon name="email" type="material" size={24} color="gray" />
                  <TextInput placeholder="Email" style={signUpStyles.input} />
                </View>
                <View style={signUpStyles.inputContainer}>
                  <Icon name="lock" type="material" size={24} color="gray" />
                  <TextInput
                    placeholder="Password"
                    style={signUpStyles.input}
                  />
                </View>
                {/* <View style={signUpStyles.inputContainer}>
                  <Icon name="lock" type="material" size={24} color="gray" />
                  <TextInput
                    placeholder="Password Confirm"
                    style={signUpStyles.input}
                  />
                </View> */}
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
