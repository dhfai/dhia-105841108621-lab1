import React from 'react';
import { SafeAreaView, Text, TextInput, View, TouchableOpacity, Image, Button } from 'react-native';
import { LoginForm } from '../../src/utils/LoginForm';
import { Ionicons } from '@expo/vector-icons';

export function LoginPage({ navigation }: { navigation: React.ComponentProps<any> }) {
    const fields = [
        { label: 'Email', placeholder: 'dhia@example.com' },
        { label: 'Password', placeholder: '********', SecureTextEntry: true },
    ];
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE', marginTop: 40}}>
            <View style={{ flex: 1, marginTop: 54 }}>
                <Text
                    style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                        paddingLeft: 10,
                        fontFamily: 'MetroBlack'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={18} color="black" />
                </Text>
                <Text
                    style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                        marginBottom: 24,
                        padding: 16,
                        fontFamily: 'MetroBold'
                    }}
                >
                    Login
                </Text>

                {/* Input Form */}
                <LoginForm fields={fields} navigation={navigation} />

                {/* Social Media Buttons */}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 100}}>
                    <Text style={{ fontFamily: 'MetroMedium', fontSize: 16, color: 'black',}}>
                        or sign up with social account
                    </Text>
                    
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 12, marginHorizontal: 10 }}>
                            <Image source={require('../../assets/google.png')} style={{ width: 30, height: 30 }} />
                        </View>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 12, marginHorizontal: 10 }}>
                            <Image source={require('../../assets/facebook.png')} style={{ width: 30, height: 30 }} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
