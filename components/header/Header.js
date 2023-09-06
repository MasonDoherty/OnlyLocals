import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import headerStyles from "./headerStyles";
const Header = () => {
  return (
    <View style={headerStyles.headerContainer}>
      <TouchableOpacity>
        <View style={headerStyles.icon}>
          <Icon
            name="phone"
            type="material"
            size={30}
            color="black"
            style={headerStyles.icon}
          />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={headerStyles.headerText}>Only Locals.</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Icon
            style={headerStyles.userPhoto}
            name="person"
            type="material"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
