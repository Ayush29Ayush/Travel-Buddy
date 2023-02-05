import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Avatar1, Hotels, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";

// require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY;

const Discover = () => {
  const navigation = useNavigation();

  // default state is restaurants
  const [type, setType] = useState("restaurants");

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
          <Image
            source={Avatar1}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white-300 mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        {/* <Text>hello</Text> */}
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: API_KEY,
            language: "en",
          }}
        />
      </View>

      {/* Menu Container */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"hotels"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"attractions"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
