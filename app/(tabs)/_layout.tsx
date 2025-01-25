import { Tabs } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayoutMain() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#83ee56",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="(Home)"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View className={focused ? "bg-" : ""}>
              <AntDesign
                name="home"
                size={25}
                color={focused ? "red" : "back"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="AddHomeWork"
        options={{
          title: "Add Homework",
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons name="add" size={34} color={focused ? "red" : "back"} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="settings-outline"
                size={25}
                color={focused ? "red" : "back"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
