import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Avatar1 } from "../assets";

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8 mt-10">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[30px]">the beauty today</Text>
        </View>

        <View className="w-14 h-14 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image source={Avatar1} className="w-full h-full rounded-md object-cover"/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
