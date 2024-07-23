import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface InputFieldComponentProps {
    label: string;
    placeholder: string;
    secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldComponentProps> = ({
    label,
    placeholder,
    secureTextEntry = false,
}) => {
    return (
        <View
            style={{
                backgroundColor: '#fff',
                marginBottom: 5,
                padding: 2,
                borderRadius: 10,
            }}
        >
            <Text
                style={{
                    fontSize: 12,
                    marginLeft: 7,
                    marginTop: 5,
                    fontFamily: 'MetroMedium',
                }}
            >
                {label}
            </Text>
            <TextInput
                style={{
                    padding: 8,
                    marginBottom: 8,
                    fontSize: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'MetroBlack',
                }}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default InputField;
