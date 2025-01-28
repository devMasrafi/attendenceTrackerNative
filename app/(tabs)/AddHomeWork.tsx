import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

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

  // date picker
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(false);
    setFormHomeworkInput({
      ...formHomeworkInput,
      date: currentDate.toLocaleDateString(),
    });
  };

  // AsyncStorage system setup
  const saveHomeworkList = async (homeworkList: Homework[]) => {
    try {
      const jsonValue = JSON.stringify(homeworkList);
      await AsyncStorage.setItem("@homeworkList", jsonValue);
    } catch (error) {
      console.error("failed to saved list data", error);
    }
  };

  const loadHomeworkList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@homeworkList");
      if (jsonValue != null) {
        setHomeworkList(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error("failed to load saved list data");
    }
  };

  // form handles
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

    alert("successful");
  };

  const handleFormClear = () => {
    setFormHomeworkInput({
      title: "",
      details: "",
      date: "",
      chapterpage: "",
    });
  };

  useEffect(() => {
    loadHomeworkList();
  }, []);

  const handleEdit = (id: string) => {
    // Add your edit logic here
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="bg-primary-100 h-full grow ">
        <View className="w-[90%] mx-auto">
          <View>
            <Text className="text-center font-medium text-2xl capitalize tracking-wider my-[2rem]">
              Add homework
            </Text>
          </View>
          <View className="">
            <View
              className={
                isFormVisible ? "hidden" : "bg-secondary-100  rounded-xl"
              }
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
                style={{ overflow: "hidden" }}
              >
                <View className="w-full bg-secondary-100 rounded-xl ">
                  <View className="my-[1rem]">
                    <TextInput
                      className="bg-primary-100 my-1 w-[90%] mx-auto rounded-lg "
                      placeholder="Homework Titile"
                      value={formHomeworkInput.title}
                      onChangeText={(text) =>
                        handleHomeworkInput("title", text)
                      }
                    />
                    <View className="flex flex-row justify-around mt-3">
                      <TextInput
                        className="bg-primary-100 rounded-lg w-[40%] "
                        placeholder="Chapter/Page"
                        value={formHomeworkInput.chapterpage}
                        onChangeText={(Text) =>
                          handleHomeworkInput("chapterpage", Text)
                        }
                      />

                      {/* date selection */}
                      <TouchableOpacity
                        className="bg-primary-100 rounded-lg w-[40%] justify-center px-2"
                        onPress={() => setShowDatePicker(true)}
                      >
                        <Text>{formHomeworkInput.date || "Select Date"}</Text>
                      </TouchableOpacity>

                      {showDatePicker && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={selectedDate}
                          mode="date"
                          is24Hour={true}
                          display="default"
                          onChange={handleDateChange}
                        />
                      )}
                    </View>
                    <TextInput
                      className="bg-primary-100 mt-3 w-[90%] mx-auto rounded-lg h-[8rem] "
                      placeholder="Details"
                      multiline
                      textAlignVertical="top"
                      value={formHomeworkInput.details}
                      onChangeText={(Text) =>
                        handleHomeworkInput("details", Text)
                      }
                    />
                  </View>
                  <View className="my-[2rem] flex-row justify-between w-[90%] mx-auto">
                    <TouchableOpacity
                      onPress={handleFormClear}
                      className="px-[2rem] py-[0.5rem] bg-orange rounded-lg "
                    >
                      <Text className="capitalize w-full text-primary-100 tracking-wider">
                        clear
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleHomeworkSubmit}
                      className="px-[2rem] py-[0.5rem] bg-primary-100 rounded-lg "
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
                className="flex items-center bg-secondary-100 px-[2rem] rounded-b-lg"
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
              <View className="border-b flex-row p-2 bg-blue-300 rounded-t-lg">
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
