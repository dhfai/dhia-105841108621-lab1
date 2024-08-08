import React from 'react';
import { TextInput, View, Text, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface TextInputFieldProps {
    placeholder: string;
    secureTextEntry?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
    style?: StyleProp<ViewStyle>;
    isValid?: boolean;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ placeholder, secureTextEntry, value, onChangeText, style, isValid }) => {
    return (
        <View style={[{ 
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#fff'
        }, style]}>
        <TextInput
            style={{ flex: 1, fontFamily: 'MetroMedium' }}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
        />
        {isValid !== undefined && (
            <Icon name={isValid ? 'checkmark-circle' : 'close-circle'} size={20} color={isValid ? 'green' : 'red'} />
        )}
        </View>
    );
};

export default TextInputField;
