import React from 'react';
import { SafeAreaView, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function LoginPages() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, padding: 16 }}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    marginBottom: 24,
                    marginTop: 54,
                    padding: 16,
                    fontFamily: 'MetroBold',
                }}>
                    Login
                </Text>
                
                <View
                    style={{
                        marginBottom: 16,
                        backgroundColor: '#fff',
                        width: '100%',
                        flex: 1,
                        marginTop: 76,
                    }}
                >
                    <TextInput
                        style={{
                            padding: 8,
                            marginBottom: 8,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'MetroMedium',
                        }}
                        placeholder="Email"
                    />
                    <TextInput
                        style={{
                            padding: 8,
                            borderWidth: 1,
                            marginBottom: 8,
                            borderColor: '#ccc',
                            borderRadius: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'MetroMedium',
                        }}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <TouchableOpacity>
                        <Text style={{
                                color: 'red',
                                textAlign: 'right',
                                marginBottom: 16,
                                fontFamily: 'MetroMedium',
                            }}>
                            Forgot your password?
                        </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'red',
                            padding: 16,
                            borderRadius: 25,
                            alignItems: 'center',
                            marginBottom: 24,
                        }}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                
                <Text style={{ textAlign: 'center', marginBottom: 16 }}>Or login with social account</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ marginHorizontal: 8 }}>
                        <Image
                            source={require('../../assets/google.png')}
                            style={{ width: 50, height: 50, backgroundColor: '#f0f0f0', borderRadius: 10}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 8 }}>
                        <Image
                            source={require('../../assets/facebook.png')}
                            style={{ width: 50, height: 50, backgroundColor: '#f0f0f0', borderRadius: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
