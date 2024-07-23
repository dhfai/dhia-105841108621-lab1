import React from 'react';
import { Image, View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';

const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <Image
                style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                source={{uri:'https://w.wallha.com/ws/13/TmKEtB06.jpg'}}
            />
            <View style={{ position: 'absolute', bottom: 250, width: '100%', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 28, marginBottom: 20, textAlign: 'left', paddingHorizontal: 20, fontFamily: 'MetroBold' }}>
                    Search for an outfit by taking a photo or uploading an image
                </Text>
                <View style={{flex: 1, width:'100%', padding: 10,}}>
                    <TouchableOpacity style={{ backgroundColor: '#FF3B30', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', fontFamily: 'MetroMedium' }}>TAKE A PHOTO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderWidth: 2, borderColor: '#fff', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, marginBottom: 10 }} onPress={() => navigation.navigate('Tabs')}>
                        <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', fontFamily: 'MetroMedium' }}>UPLOAD AN IMAGE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SplashScreen;
