import { View, Text } from "react-native";
import React from "react";

const index = () => {
  return (
    <View className="bg-white">
      <View className="mt-3 w-[12rem] border-b-4 border-gray-300 mx-auto">
        <Text className="text-2xl capitalize text-center mb-3 tracking-wide">
          Todays update
        </Text>
      </View>
      <View className="mt-3">
        <View className="mt-[1rem] flex items-center ">
          <View className="flex items-center justify-center">
            <View className="w-[25rem] h-[18rem] bg-gray-300 rounded-2xl mb-[3rem] ">
              <Text className="text-center ">calander</Text>
            </View>
          </View>
          <View className="">
            <View className="w-[25rem] h-[8rem] bg-gray-300 rounded-2xl">
              <Text className="text-center">Your Homework</Text>
            </View>
          </View>
          <View>
            <View className="w-[25rem] h-[8rem] bg-gray-300 rounded-2xl mt-[2rem] ">
              <Text className="text-center">you classes</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
