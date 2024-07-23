import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

const SocialLoginButtons: React.FC = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 150 }}>
            <Text style={{ marginBottom: 10 }}>Or sign up with social account</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: 10, backgroundColor: '#fff', borderRadius: 50, padding: 10, elevation: 2 }}>
                    <Image source={{ uri: 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000' }} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 10, backgroundColor: '#fff', borderRadius: 50, padding: 10, elevation: 2 }}>
                    <Image source={{ uri: 'https://img.icons8.com/?size=100&id=13912&format=png&color=000000' }} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SocialLoginButtons;
