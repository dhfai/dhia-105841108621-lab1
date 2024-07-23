import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SocialLoginButtons from '../components/SocialLoginButtons';
import TextInputField from '../components/TextInputField';

const RegisterPage: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const validateName = (name: string) => {
        setName(name);
        setIsNameValid(name.length > 0);
    };

    const validateEmail = (email: string) => {
        setEmail(email);
        setIsEmailValid(email.includes('@'));
    };

    return (
        <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
        <Text style={{ fontSize: 34, marginBottom: 150, textAlign: 'left', fontFamily: 'MetroBold' }}>Sign up</Text>
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
            onPress={() => navigation.navigate('Splash')}
        >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>SIGN UP</Text>
        </TouchableOpacity>
        <SocialLoginButtons />
        </View>
    );
};

export default RegisterPage;
