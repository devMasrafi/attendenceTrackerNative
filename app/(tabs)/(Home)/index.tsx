import { View, Text } from "react-native";
import React from "react";

const index = () => {
  return (
    <View>
      <View>
        <View className="mt-[3rem] flex items-center ">
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
