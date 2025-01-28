import { View, Text } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";

const CalanderUtils = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [onDayPress, setOnDayPress] = useState<string>();

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString); // Save selected date (format: YYYY-MM-DD)
  };

  return (
    <View>
      <Calendar
        current={new Date().toISOString().split("T")[0]}
        onDayPress={(day: any) => {
          setSelectedDate(day.dateString);
          console.log("selected day", day);
        }}
        hideArrows={false}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "blue",
            selectedTextColor: "white",
          },
        }}
        enableSwipeMonths={true}
      />
    </View>
  );
};

export default CalanderUtils;
