import { View, Text, SafeAreaView, Image } from "react-native";
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
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2021/12/10/08/24/bird-6860047_960_720.jpg"
          }} className="w-20 h-20 object-cover"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
