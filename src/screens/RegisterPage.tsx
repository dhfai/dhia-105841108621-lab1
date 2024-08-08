import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import TextInputField from '../components/TextInputField';
import { register } from '../auth/authService'
import SocialLoginButtons from '../components/SocialLoginButtons';

const RegisterPage: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isNameValid, setIsNameValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

    const validateName = (name: string) => {
        setName(name);
        setIsNameValid(name.length > 0);
    };

    const validateEmail = (email: string) => {
        setEmail(email);
        setIsEmailValid(email.includes('@'));
    };

    const onSubmit = async () => {
        if (isNameValid && isEmailValid && password) {
            try {
                await register(email, password, name);
                navigation.navigate('Login');
            } catch (error) {
                Alert.alert('Registration failed', 'An error occurred during registration.');
            }
        } else {
            Alert.alert('Validation error', 'Please ensure all fields are valid.');
        }
    };

    return (
        <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
            <Text style={{ fontSize: 34, marginBottom: 100, textAlign: 'left', fontFamily: 'MetroBold' }}>Sign up</Text>
            <TextInputField
                placeholder="Name"
                value={name}
                onChangeText={validateName}
                isValid={isNameValid}
            />
            <TextInputField
                placeholder="Email"
                value={email}
                onChangeText={validateEmail}
                isValid={isEmailValid}
            />
            <TextInputField
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginVertical: 10 }}>
                <Text style={{ color: 'black', marginRight: 5 }}>Already have an account?</Text>
                <Text style={{ color: '#7469B6' }}>→</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    backgroundColor: '#7469B6',
                    paddingVertical: 15,
                    borderRadius: 30,
                    marginVertical: 10,
                    alignItems: 'center',
                    elevation: 3,
                }}
                onPress={onSubmit}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>SIGN UP</Text>
            </TouchableOpacity>
            <SocialLoginButtons />
        </View>
    );
};

export default RegisterPage;
