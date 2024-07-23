import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SocialLoginButtons from '../components/SocialLoginButtons';
import TextInputField from '../components/TextInputField';

const LoginPage: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
            <Text style={{ fontSize: 34, marginBottom: 150, textAlign: 'left', fontFamily: 'MetroBold' }}>Login</Text>
            <TextInputField
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInputField
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ color: 'black', marginRight: 5 }}>Forgot your password?</Text>
                <Text style={{ color: 'red' }}>→</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                backgroundColor: 'red',
                paddingVertical: 15,
                borderRadius: 30,
                marginVertical: 10,
                alignItems: 'center',
                elevation: 3
                }}
                onPress={() => {}}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
            </TouchableOpacity>
            <SocialLoginButtons />
        </View>
    );
};

export default LoginPage;
