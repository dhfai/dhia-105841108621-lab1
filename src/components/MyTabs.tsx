import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from './Icon';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import BagScreen from '../screens/BagScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
            <Icon routeName={route.name} focused={focused} color={color} size={size} />
            ),
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
            fontSize: 12,
            },
        })}
        >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Bag" component={BagScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default MyTabs;
