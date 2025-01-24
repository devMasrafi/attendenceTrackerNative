import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const notFound = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View className="flex items-center justify-center text-gray-400 h-full">
        <Text>This page is not available</Text>
      </View>
    </>
  );
};

export default notFound;
