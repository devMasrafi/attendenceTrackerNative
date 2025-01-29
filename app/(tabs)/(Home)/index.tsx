import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
import CalanderUtils from "@/app/utils/CalanderUtils";

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

  // calander

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
              {/* calander */}
              <View className="flex items-center justify-center ">
                <View className="w-[25rem] h-[22rem] bg-gray-300 rounded-2xl mb-[3rem] ">
                  <CalanderUtils />
                </View>
              </View>

              {/* homewor-card */}
              <View className="">
                <View className="w-[15rem] mx-auto mb-2 border-b border-primary-200 ">
                  <Text className="text-center text-xl pb-2">
                    Your Homework
                  </Text>
                </View>
                <View className="w-[25rem] h-[8rem] bg-secondary-200 rounded-2xl mt-2">
                  <View className="w-[90%] mx-auto my-2">
                    {homeworkList.map((items) => (
                      <View key={items.id}>
                        <Text>{items.chapterpage}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>

              {/* class-card */}
              <View className="mt-3">
                <View className="w-[15rem] mx-auto mb-2 border-b border-primary-200 ">
                  <Text className="text-center text-xl pb-2">Your Classes</Text>
                </View>
                <View className="w-[25rem] h-[8rem] bg-secondary-200  rounded-2xl ">
                  <View className="w-[90%] mx-auto my-2">
                    <Text>This</Text>
                  </View>
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
