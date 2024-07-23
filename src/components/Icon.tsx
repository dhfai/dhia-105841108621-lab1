import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface TabIconProps {
    routeName: string;
    focused: boolean;
    color: string;
    size: number;
}

const TabIcon: React.FC<TabIconProps> = ({ routeName, focused, color, size }) => {
    let iconName;

    switch (routeName) {
        case 'Home':
        iconName = focused ? 'home' : 'home-outline';
        break;
        case 'Shop':
        iconName = focused ? 'cart' : 'cart-outline';
        break;
        case 'Bag':
        iconName = focused ? 'bag' : 'bag-outline';
        break;
        case 'Favorites':
        iconName = focused ? 'heart' : 'heart-outline';
        break;
        case 'Profile':
        iconName = focused ? 'person' : 'person-outline';
        break;
        default:
        iconName = 'help-circle';
    }

    return <Icon name={iconName} size={size} color={color} />;
};

export default TabIcon;
