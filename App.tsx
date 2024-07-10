import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginPage } from './Components/Pages/LoginPage';
import HomeAktif from './home-aktif.png';
import HomeInaktif from './home-inaktif.png';
import Shop from './shop-aktif.png';
import ShopInaktif from './shop-inaktif.png';
import { RegisterPage } from './Components/Pages/RegisterPage';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sign"
        component={RegisterPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation} : {navigation: React.ComponentProps<any>}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
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
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false }} />
        <Stack.Screen name="Sign up" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;