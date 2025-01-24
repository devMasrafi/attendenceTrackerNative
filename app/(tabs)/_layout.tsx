import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayoutMain() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#83ee56" }}
    >
      <Tabs.Screen
        name="(Home)"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home" size={20} color="black" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Ionicons name="settings" size={20} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
