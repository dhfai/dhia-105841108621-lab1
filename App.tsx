import React from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
    "MetroBlack": require("./assets/fonts/Metropolis-Black.otf"),
    "MetroBold": require("./assets/fonts/Metropolis-Bold.otf"),
    "MetroLight": require("./assets/fonts/Metropolis-Light.otf"),
    "MetroSemibold": require("./assets/fonts/Metropolis-SemiBold.otf"),
    "MetroMedium": require("./assets/fonts/Metropolis-Medium.otf"),
  });

  if (!fontsLoaded) {
    return <View><Text>Font tidak ada </Text></View>;
  }

  return <AppNavigator />;
};

export default App;
