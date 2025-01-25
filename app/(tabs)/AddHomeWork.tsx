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
          <View className="w-[90%] bg-gray-300 rounded-xl ">
            <View className="my-[1rem]">
              <TextInput
                className="bg-white my-1 w-[90%] mx-auto rounded-lg "
                placeholder="homework titile"
              />
              <View className="flex flex-row justify-around mt-3">
                <TextInput
                  className="bg-white rounded-lg w-[40%] "
                  placeholder="Chapter/page"
                />
                <TextInput
                  className="bg-white rounded-lg w-[40%]"
                  placeholder="date"
                  
                />
              </View>
              <TextInput
                className="bg-white mt-3 w-[90%] mx-auto rounded-lg "
                placeholder="details"
              />
              <View>
                {/* get images */}

                <View>
                  
                </View>
              </View>
            </View>
          </View>
          {/* <View className="h-[4rem] w-[90%] bg-gray-300 rounded-xl">
            <Text>This is </Text>
          </View>
          <View className="h-[4rem] w-[90%] bg-gray-300 rounded-xl">
            <Text>This is </Text>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default AddHomeWork;
