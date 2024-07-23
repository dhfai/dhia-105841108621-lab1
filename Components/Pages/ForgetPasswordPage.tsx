import React from 'react';
import { SafeAreaView, Text, TextInput, View, TouchableOpacity, Image, Button } from 'react-native';
import { LoginForm } from '../../src/utils/LoginForm';
import { Ionicons } from '@expo/vector-icons';

export function ForgetPasswordPage({ navigation }: { navigation: React.ComponentProps<any> }) {
    const fields = [
        { label: 'Email', placeholder: 'dhia@example.com' },
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
                    Forgot Password
                </Text>

                {/* Input Form */}
                <LoginForm fields={fields} navigation={navigation} />
            </View>
        </SafeAreaView>
    );
}
