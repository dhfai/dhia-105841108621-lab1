import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPages from './Components/Pages/LoginPages';
import { useFonts } from 'expo-font';

function HomeScreen({ navigation}: {navigation: React.ComponentProps<any>}) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        fontFamily: 'MetroBlack',
      }}>Home Screen</Text>
      <Button title="Ke Halaman Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPages} options={{
          
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;