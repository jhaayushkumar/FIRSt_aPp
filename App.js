// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import BookTokenScreen from "./screens/BookTokenScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#4f46e5" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "QueueLess Services" }}
        />
        <Stack.Screen 
          name="BookToken" 
          component={BookTokenScreen} 
          options={({ route }) => ({ title: route.params.service })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
