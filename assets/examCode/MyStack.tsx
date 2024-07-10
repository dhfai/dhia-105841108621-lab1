import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginPage} from './Components/Pages/LoginPage';
import { useFonts } from 'expo-font';
import { RegisterPage } from './Components/Pages/RegisterPage'
import { ForgetPasswordPage } from './Components/Pages/ForgetPasswordPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './Components/Pages/HomePage';



const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    "MetroBlack": require("./assets/fonts/Metropolis-Black.otf"),
    "MetroBold": require("./assets/fonts/Metropolis-Bold.otf"),
    "MetroLight": require("./assets/fonts/Metropolis-Light.otf"),
    "MetroSemibold": require("./assets/fonts/Metropolis-SemiBold.otf"),
    "MetroMedium": require("./assets/fonts/Metropolis-Medium.otf"),
  })
  
  if (!fontsLoaded) {
    return <View><Text>Font tidak ada </Text></View>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPasswordPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;