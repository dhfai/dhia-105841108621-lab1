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

export function RegisterForm({ fields, navigation }: InputFormProps) {
    return (
        <View style={{ flex: 1, margin: 20 }}>
            {fields.map((field, index) => (
                <InputField
                    key={index}
                    label={field.label}
                    placeholder={field.placeholder}
                    secureTextEntry={field.secureTextEntry}
                />
            ))}

            <Text 
                onPress={() => navigation.navigate('Login')}
                style={{
                    textAlign: 'right',
                    marginBottom: 16,
                    fontFamily: 'MetroMedium'
                }}
            >
                Already have an account? <Text style={{color:"red"}}>{'\u27F6'}</Text>
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
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
};
