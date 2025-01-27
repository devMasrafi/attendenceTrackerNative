import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddHomeWork = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleVisiblity = () => {
    setIsFormVisible(!isFormVisible);
  };

  // form handels
  const [formHomeworkInput, setFormHomeworkInput] = useState({
    title: "",
    chapterpage: "",
    date: "",
    details: "",
  });

  const handleHomeworkInput = (field: string, value: string) => {
    setFormHomeworkInput((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleHomeworkSubmit = () => {
    const { title, chapterpage, date, details } = formHomeworkInput;

    if (!title || !chapterpage || !date || !details) {
      alert("All Fields Are Required");
      return;
    }

    console.log("Homework Created Successfully", formHomeworkInput);

    setFormHomeworkInput({
      title: "",
      details: "",
      date: "",
      chapterpage: "",
    });

    alert("successfull");
  };

  const handleFormClear = () => {
    setFormHomeworkInput({
      title: "",
      details: "",
      date: "",
      chapterpage: "",
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="bg-white h-full">
        <View>
          <Text className="text-center font-medium text-2xl capitalize tracking-wider my-[2rem]">
            Add homework
          </Text>
        </View>
        <View>
          <View
            className={
              isFormVisible
                ? "hidden"
                : "w-[90%] mx-auto bg-gray-300 rounded-xl"
            }
          >
            <Text className="text-center py-2 text-xl tracking-wide capitalize ">
              Extend to input
            </Text>
          </View>

          {/* form */}
          {isFormVisible && (
            <View className="flex items-center gap-y-[2rem]">
              <View className="w-[90%] bg-gray-300 rounded-xl ">
                <View className="my-[1rem]">
                  <TextInput
                    className="bg-white my-1 w-[90%] mx-auto rounded-lg "
                    placeholder="Homework Titile"
                    value={formHomeworkInput.title}
                    onChangeText={(text) => handleHomeworkInput("title", text)}
                  />
                  <View className="flex flex-row justify-around mt-3">
                    <TextInput
                      className="bg-white rounded-lg w-[40%] "
                      placeholder="Chapter/Page"
                      value={formHomeworkInput.chapterpage}
                      onChangeText={(Text) =>
                        handleHomeworkInput("chapterpage", Text)
                      }
                    />
                    <TextInput
                      className="bg-white rounded-lg w-[40%]"
                      placeholder="Date"
                      value={formHomeworkInput.date}
                      onChangeText={(Text) => handleHomeworkInput("date", Text)}
                    />
                  </View>
                  <TextInput
                    className="bg-white mt-3 w-[90%] mx-auto rounded-lg h-[8rem] "
                    placeholder="Details"
                    multiline
                    textAlignVertical="top"
                    value={formHomeworkInput.details}
                    onChangeText={(Text) =>
                      handleHomeworkInput("details", Text)
                    }
                  />
                  <View>
                    {/* get images */}
                    <View></View>
                  </View>
                </View>
                <View className="my-[2rem] flex-row justify-between w-[90%] mx-auto">
                  <TouchableOpacity
                    onPress={handleFormClear}
                    className="px-[2rem] py-[0.5rem] bg-red-400 rounded-lg "
                  >
                    <Text>clear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleHomeworkSubmit}
                    className="px-[2rem] py-[0.5rem] bg-orange-300 rounded-lg "
                  >
                    <Text>Add Homework</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          <View className="mx-auto ">
            <TouchableOpacity
              onPress={handleVisiblity}
              className="flex items-center bg-gray-300 px-[2rem] rounded-b-lg"
            >
              <AntDesign
                className="text-center"
                name={isFormVisible ? "up" : "down"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddHomeWork;
