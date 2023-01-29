import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

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
      <View className="flex-row px-6 mt-10 items-center space-x-2">
        <View className="w-24 h-19 bg-black rounded-lg items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Travel</Text>
        </View>
        <View>
          <Text className="text-[#2A2B4B] text-3xl fond-semibold">Buddy</Text>
        </View>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-2">
        <Text className="text-[#3C6072] text-[39px]">Plan your trip with</Text>
        <Text className="text-[#00BCC9] text-[35px] font-extrabold">Travel Buddy</Text>
        <Text className="text-slate-500">Travel Buddy is the ultimate travel advisor app for all your vacation needs. From planning to booking, we've got you covered.</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
