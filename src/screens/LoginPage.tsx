import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import TextInputField from '../components/TextInputField';
import { login } from '../auth/authService'

const LoginPage: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        try {
            await login(email, password);
            navigation.navigate('Splash');
        } catch (error) {
            Alert.alert('Login failed', 'Invalid credentials.');
        }
    };

    return (
        <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
            <Text style={{ fontSize: 34, marginBottom: 100, textAlign: 'left', fontFamily: 'MetroBold' }}>Login</Text>
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
                <Text style={{ color: '#7469B6' }}>→</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    backgroundColor: '#7469B6',
                    paddingVertical: 15,
                    borderRadius: 30,
                    marginVertical: 10,
                    alignItems: 'center',
                    elevation: 3
                }}
                onPress={handleLogin}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginPage;
