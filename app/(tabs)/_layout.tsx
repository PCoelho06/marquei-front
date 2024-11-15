import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          headerShown: false,
          title: "Bookings",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          title: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
