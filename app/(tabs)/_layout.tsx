import { Tabs } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function TabLayoutMain() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#83ee56",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          borderTopWidth: 0,
          backgroundColor: "#FFF",
        },
        tabBarHideOnKeyboard: true
      }}
     >
      <Tabs.Screen
        name="(Home)"
        options={{
          title: "Home",
          tabBarIcon: () => <AntDesign name="home" size={25} color="black" />,
        }}
      />
      <Tabs.Screen
        name="AddHomeWork"
        options={{
          title: "Add Homework",
          tabBarIcon: () => <Ionicons name="add" size={30} color="black" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Ionicons name="settings-outline" size={25} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
