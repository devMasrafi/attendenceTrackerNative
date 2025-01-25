import { View, Text, TextInput } from "react-native";
import React from "react";

const AddHomeWork = () => {
  return (
    <View>
      <View>
        <View>
          <Text className="text-center font-medium text-2xl capitalize tracking-wider my-[2rem]">
            Add homework
          </Text>
        </View>
        <View className="flex items-center gap-y-[2rem]">
          <View className="h-[4rem] w-[90%] bg-gray-300 rounded-xl ">
            <TextInput placeholder="homework titile" />
          </View>
          <View className="h-[4rem] w-[90%] bg-gray-300 rounded-xl">
            <Text>This is </Text>
          </View>
          <View className="h-[4rem] w-[90%] bg-gray-300 rounded-xl">
            <Text>This is </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddHomeWork;
