import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Students4 from "./screens/Students4";
import RecentActivities from "./screens/RecentActivities";
import CloseActivity from "./screens/CloseActivity";
import Home from "./screens/Home";
import Activitiy from "./screens/Activitiy";
import NewTask from "./screens/NewTask";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import Dashboard from "./screens/Dashboard";
import StudentDetails from "./components/StudentDetails";
import PersonalDetailsScreen from "./screens/PersonalDetailsScreen";
import GroupSelectionScreen from "./screens/GroupSelectionScreen";
import HomePupil from "./screens/HomePupil";
import ContactUs from "./screens/ContactUs";
import ChatbotScreen from './screens/ChatbotScreen';
import InstructorMessageScreen from './screens/InstructorMessageScreen';



import { Provider } from 'react-native-paper'
import { theme } from './core/theme'

const App = () => {
  const Stack = createStackNavigator();

    return (
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="PersonalDetailsScreen" component={PersonalDetailsScreen} />
            <Stack.Screen name="GroupSelectionScreen" component={GroupSelectionScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Activitiy"
          component={Activitiy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Students4"
        component={Students4}
        options={{ title: "חניכים" }}
      />
         <Stack.Screen
        name="CloseActivity"
        component={CloseActivity}
        options={{ headerShown: false }}
        />
         <Stack.Screen
        name="RecentActivities"
        component={RecentActivities}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="StudentDetails"
        component={StudentDetails}
        options={{ headerShown: false }}
        />
            <Stack.Screen name="HomePupil" component={HomePupil} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="ChatbotScreen" component={ChatbotScreen} />
            <Stack.Screen name="InstructorMessageScreen" component={InstructorMessageScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
  
export default App;