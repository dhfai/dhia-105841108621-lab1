import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import TextInputField from '../components/TextInputField';

const ForgotPasswordPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSend = () => {
        if (!email.includes('@')) {
        setError('Not a valid email address. Should be your@email.com');
        } else {
        setError('');
        
        }
    };

    return (
        <View style={{ flex: 1, padding: 20, marginTop: 50, }}>
        <Text style={{ fontSize: 34, marginBottom: 150, textAlign: 'left', fontFamily: 'MetroBold' }}>Forgot password</Text>
        <Text style={{ textAlign: 'left', marginBottom: 20, fontFamily: 'MetroMedium', fontSize: 16 }}>
            Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
        <TextInputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={error ? { borderColor: 'red' } : {}}
        />
        {error ? <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>{error}</Text> : null}
        <TouchableOpacity
            style={{
            backgroundColor: 'red',
            paddingVertical: 15,
            borderRadius: 30,
            marginVertical: 10,
            alignItems: 'center',
            elevation: 3
            }}
            onPress={handleSend}
        >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>SEND</Text>
        </TouchableOpacity>
        </View>
    );
};

export default ForgotPasswordPage;
