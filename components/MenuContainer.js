import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

// passing props ro menucontainer
const MenuContainer = (title, imageSrc, type, setType) => {
  return (
    <TouchableOpacity className="items-center justify-center space-y-2">
      <View>MenuContainer</View>
    </TouchableOpacity>
  );
};

export default MenuContainer;
