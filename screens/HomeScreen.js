import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage, trialpic } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-12 items-center space-x-2">
        <View className="w-24 h-19 bg-black rounded-lg items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Travel</Text>
        </View>
        <View>
          <Text className="text-[#2A2B4B] text-3xl fond-semibold">Buddy</Text>
        </View>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-6 space-y-1">
        <Text className="text-[#3C6072] text-[39px]">Plan your trip with</Text>
        <Text className="text-[#00BCC9] text-[35px] font-extrabold">
          Travel Buddy
        </Text>
        <Text className="text-slate-500">
          Travel Buddy is the ultimate travel advisor app for all your vacation
          needs. From planning to booking, we've got you covered.
        </Text>
      </View>

      {/* Third Section - Circle */}
      <View className="w-[300px] h-[300px] bg-[#00BCC9] rounded-full absolute bottom-8 -right-32"></View>
      <View className="w-[300px] h-[300px] bg-[#E99265] rounded-full absolute -bottom-28 -left-32"></View>

      {/* Fourth Section - Image */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-5"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-29 h-29 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full item-center justify-center"
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-24 h-24 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-300 text-[54px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
