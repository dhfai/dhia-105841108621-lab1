import React from 'react';
import { View, Text, Image } from 'react-native';


export const ButtonCustom = ({color, text, backgroundColor}: {color: string, text: string, backgroundColor?: string}) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                marginBottom: -80,
            }}
        >
        <View
            style={{
            borderWidth: 5,
            borderColor: '#222831',
            backgroundColor: backgroundColor || '',
            width: 160,
            height: 60,
            borderRadius: 200,
            justifyContent: 'center',
            }}
        >
            <Text style={{
                color: color,
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
            }}>
            {text}
            </Text>
        </View>
        </View>
    )
}