import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 96,
          borderWidth: 1,
          borderRadius: 48,
          padding: 10,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          margin: 10,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          headerShown: false,
          title: "Reservas",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="saloes/[id]"
        options={{
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  );
}
