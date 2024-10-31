import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="health"
        options={{
          title: "건강관리",
          tabBarIcon: () => (
            <MaterialIcons name="health-and-safety" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="contents"
        options={{
          title: "게시물찾기",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="find" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "기념일기",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="mail" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
