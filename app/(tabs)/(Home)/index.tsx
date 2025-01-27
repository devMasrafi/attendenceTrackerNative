import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
  const [homeworkList, setHomeworkList] = useState<any[]>([]);

  const loadHomeworkList = async () => {
    try {
      const listValue = await AsyncStorage.getItem("@homeworkList");
      if (listValue != null) {
        setHomeworkList(JSON.parse(listValue));
      }
    } catch (error) {
      console.error("failed to get saved list", error);
    }
  };

  useEffect(() => {
    loadHomeworkList();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="bg-white h-full grow">
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

              {/* homewor-card */}
              <View className="">
                <View className="w-[25rem] h-[8rem] bg-gray-300 rounded-2xl">
                  {homeworkList.map((items) => (
                    <View key={items.id}>
                      <Text>{items.date}</Text>
                    </View>
                  ))}
                  <Text className="text-center">Your Homework</Text>
                </View>
              </View>

              {/* class-card */}
              <View>
                <View className="w-[25rem] h-[8rem] bg-gray-300 rounded-2xl mt-[2rem] ">
                  <Text className="text-center">you classes</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
