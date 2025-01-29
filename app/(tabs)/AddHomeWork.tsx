import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";

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
  const [showCalander, setShowCalander] = useState(false);

  // AsyncStorage setup
  const saveHomeworkList = async (homeworkList: Homework[]) => {
    try {
      const jsonValue = JSON.stringify(homeworkList);
      await AsyncStorage.setItem("@homeworkList", jsonValue);
    } catch (error) {
      console.error("Failed to save list data", error);
    }
  };

  const loadHomeworkList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@homeworkList");
      if (jsonValue != null) {
        setHomeworkList(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error("Failed to load saved list data");
    }
  };

  // Form state
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

    const updatedHomeworkList = [...homeworkList, newHomework];
    setHomeworkList(updatedHomeworkList);
    saveHomeworkList(updatedHomeworkList);

    console.log("Homework Created Successfully", formHomeworkInput);

    setFormHomeworkInput({
      title: "",
      details: "",
      date: "",
      chapterpage: "",
    });

    alert("Successfully Added");
  };

  useEffect(() => {
    loadHomeworkList();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="bg-primary-100 h-full grow">
        <View className="w-[90%] mx-auto">
          <Text className="text-center font-medium text-2xl capitalize tracking-wider my-[2rem]">
            Add Homework
          </Text>

          <View>
            {!isFormVisible && (
              <View className="bg-secondary-100 rounded-xl">
                <Text className="text-center py-2 text-xl tracking-wide capitalize">
                  Extend to input
                </Text>
              </View>
            )}

            {isFormVisible && (
              <View className="transition-all duration-300 ease-linear max-h-[500px] overflow-hidden">
                <View className="w-full bg-secondary-100 rounded-xl">
                  <View className="my-[1rem]">
                    <TextInput
                      className="bg-primary-100 my-1 w-[90%] mx-auto rounded-lg"
                      placeholder="Homework Title"
                      value={formHomeworkInput.title}
                      onChangeText={(text) =>
                        handleHomeworkInput("title", text)
                      }
                    />
                    <View className="flex flex-row justify-around items-center mt-3">
                      <TextInput
                        className="bg-primary-100 rounded-lg w-[40%]"
                        placeholder="Chapter/Page"
                        value={formHomeworkInput.chapterpage}
                        onChangeText={(text) =>
                          handleHomeworkInput("chapterpage", text)
                        }
                      />

                      {/* Date Selection */}
                      <View className="w-[40%] flex items-center">
                        <TouchableOpacity
                          onPress={() => setShowCalander(true)}
                          className="w-full px-2 py-3 rounded-lg bg-primary-100"
                        >
                          <Text>{formHomeworkInput.date || "Select Date"}</Text>
                        </TouchableOpacity>

                        {/* Calendar Modal */}
                        <Modal
                          visible={showCalander}
                          transparent
                          animationType="fade"
                          onRequestClose={() => setShowCalander(false)}
                        >
                          <View className="flex-1 justify-center items-center bg-black/50">
                            <View className="bg-white rounded-lg shadow-lg p-4 w-[90%]">
                              <Text className="text-center font-medium text-lg mb-2">
                                Select Date
                              </Text>
                              <Calendar
                                onDayPress={(day: { dateString: string }) => {
                                  handleHomeworkInput("date", day.dateString);
                                  setShowCalander(false);
                                }}
                                markedDates={{
                                  [formHomeworkInput.date]: {
                                    selected: true,
                                    selectedColor: "blue",
                                    selectedTextColor: "white",
                                  },
                                }}
                              />
                              <TouchableOpacity
                                onPress={() => setShowCalander(false)}
                                className="mt-4 px-4 py-2 bg-gray-300 rounded-lg w-full"
                              >
                                <Text className="text-center">Close</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </Modal>
                      </View>
                    </View>

                    <TextInput
                      className="bg-primary-100 mt-3 w-[90%] mx-auto rounded-lg h-[8rem]"
                      placeholder="Details"
                      multiline
                      textAlignVertical="top"
                      value={formHomeworkInput.details}
                      onChangeText={(text) =>
                        handleHomeworkInput("details", text)
                      }
                    />
                  </View>

                  <View className="my-[2rem] flex-row justify-between w-[90%] mx-auto">
                    <TouchableOpacity
                      onPress={() =>
                        setFormHomeworkInput({
                          title: "",
                          details: "",
                          date: "",
                          chapterpage: "",
                        })
                      }
                      className="px-[2rem] py-[0.5rem] bg-orange rounded-lg"
                    >
                      <Text className="capitalize w-full text-primary-100 tracking-wider">
                        Clear
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleHomeworkSubmit}
                      className="px-[2rem] py-[0.5rem] bg-primary-100 rounded-lg"
                    >
                      <Text>Add Homework</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            <View className="mx-auto">
              <TouchableOpacity
                onPress={() => setIsFormVisible(!isFormVisible)}
                className="flex items-center bg-secondary-100 px-[2rem] rounded-b-lg"
              >
                <AntDesign
                  name={isFormVisible ? "up" : "down"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Homework List */}
          <View className="mt-[4rem]">
            <View className="border rounded-lg h-[35rem]">
              <View className="border-b flex-row p-2 bg-blue-300 rounded-t-lg">
                <Text className="flex-row flex-1 font-medium text-gray-700 text-xl">
                  Chapter/Page
                </Text>
                <Text className="flex-row flex-1 font-medium text-gray-700 text-xl">
                  Date
                </Text>
                <Text className="w-10 font-medium text-gray-700 text-xl">
                  Edit
                </Text>
              </View>

              {homeworkList.map((items) => (
                <View key={items.id} className="border-b flex-row p-2">
                  <Text className="flex-row flex-1 font-medium text-gray-700">
                    {items.chapterpage}
                  </Text>
                  <Text className="flex-row flex-1 font-medium text-gray-700">
                    {items.date}
                  </Text>
                  <TouchableOpacity>
                    <Text>Edit</Text>
                  </TouchableOpacity>
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
