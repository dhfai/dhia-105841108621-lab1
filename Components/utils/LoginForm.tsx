import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import InputField from './InputField';

interface InputField {
    label: string;
    placeholder: string;
    secureTextEntry?: boolean;
}

interface InputFormProps {
    fields: InputField[];
    navigation: any;
}

export function LoginForm({ fields, navigation }: InputFormProps) {
    return (
        <View style={{ flex: 1, margin: 20 }}>
            <Text 
                onPress={() => navigation.navigate('ForgetPassword')}
                style={{
                    marginBottom: 16,
                    fontFamily: 'MetroSemibold',
                    letterSpacing: 0.4,
                }}
            >
                Please enter your email address. You will receive a link to create a new password via email.
            </Text>
            {fields.map((field, index) => (
                <InputField
                    key={index}
                    label={field.label}
                    placeholder={field.placeholder}
                    secureTextEntry={field.secureTextEntry}
                />
            ))}

            <Text 
                onPress={() => navigation.navigate('ForgetPassword')}
                style={{
                    textAlign: 'right',
                    marginBottom: 16,
                    fontFamily: 'MetroMedium'
                }}
            >
            </Text>

            <TouchableOpacity
                style={{
                    backgroundColor: 'red',
                    padding: 16,
                    borderRadius: 25,
                    alignItems: 'center',
                    marginBottom: 24,
                }}
            >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>SEND</Text>
            </TouchableOpacity>
        </View>
    );
};
