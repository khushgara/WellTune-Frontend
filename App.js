import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import WelcomeScreen from "./src/screens/Wellcome";
import ProfileScreen from "./src/screens/ProfileScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import { DarkModeProvider } from "./src/context/DarkModeContext";
// import Explore from "./src/screens/Explore";
// import MyPlan from "./src/screens/MyPlan";

const Stack = createStackNavigator();
export default function App() {
  useEffect(() => {
    document.body.style.setProperty("overflow", "auto", "important");
  }, []);
  return (
    <DarkModeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
          name="MyPlan"
          component={MyPlan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{ headerShown: false }}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
}
