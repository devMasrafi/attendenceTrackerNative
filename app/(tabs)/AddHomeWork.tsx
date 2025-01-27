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
import { hide } from "expo-router/build/utils/splash";

const AddHomeWork = () => {
  interface Homework {
    id: string;
    title: string;
    chapterpage: string;
    date: string;
    details: string;
  }

  const [homeworkList, setHomeworkList] = useState<Homework[]>([]);
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

    const newHomework = {
      id: Date.now().toString() + homeworkList.length + 1,
      title,
      chapterpage,
      date,
      details,
    };

    setHomeworkList((prevList) => [...prevList, newHomework]);

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

  const handleEdit = (id: string) => {
    // Add your edit logic here
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="bg-white h-full grow ">
        <View className="w-[90%] mx-auto">
          <View>
            <Text className="text-center font-medium text-2xl capitalize tracking-wider my-[2rem]">
              Add homework
            </Text>
          </View>
          <View className="">
            <View
              className={isFormVisible ? "hidden" : "bg-gray-300 rounded-xl"}
            >
              <Text className="text-center py-2 text-xl tracking-wide capitalize ">
                Extend to input
              </Text>
            </View>

            {/* form */}
            {isFormVisible && (
              <View
                className={`transition-all duration-300 ease-linear ${
                  isFormVisible ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{overflow: "hidden"}}
              >
                <View className="w-full bg-gray-300 rounded-xl ">
                  <View className="my-[1rem]">
                    <TextInput
                      className="bg-white my-1 w-[90%] mx-auto rounded-lg "
                      placeholder="Homework Titile"
                      value={formHomeworkInput.title}
                      onChangeText={(text) =>
                        handleHomeworkInput("title", text)
                      }
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
                        onChangeText={(Text) =>
                          handleHomeworkInput("date", Text)
                        }
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

          {/* lists */}
          <View className="mt-[4rem]">
            <View className="border rounded-lg h-[35rem]">
              <View className="border-b flex-row p-2 bg-gray-200 rounded-t-lg">
                <Text className="flex-row flex-1 font-medium text-gray-700 text-xl ">
                  Chapter/Page
                </Text>
                <Text className="flex-row flex-1 font-medium text-gray-700 text-xl ">
                  Date
                </Text>
                <Text className="w-10 bg-gray font-medium text-gray-700 text-xl ">
                  Edit
                </Text>
              </View>
              {homeworkList.map((items) => (
                <View
                  key={items.id}
                  className="border-b flex-row p-2 last:border-none"
                >
                  <Text className="flex-row flex-1 font-medium text-gray-700">
                    {items.chapterpage}
                  </Text>
                  <Text className="flex-row flex-1 font-medium text-gray-700">
                    {items.date}
                  </Text>
                  <Text className="w-10 bg-gray font-medium text-gray-700">
                    <TouchableOpacity onPress={() => handleEdit(items.id)}>
                      <Text>Edit</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddHomeWork;
