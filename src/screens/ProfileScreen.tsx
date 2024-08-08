import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1557683316-973673baf926' }}
            style={{ flex: 1, justifyContent: 'center' }}
            blurRadius={5}
        >
            <View 
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginHorizontal: 20,
                    borderRadius: 20,
                    paddingVertical: 30,
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 10,
                    marginTop: -50,  // Overlap with the top of the screen
                }}
            >
                <Image
                    source={{ uri: 'https://w.wallha.com/ws/15/oAhFTu8N.jpg' }}
                    style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 15 }}
                    accessible={true}
                    accessibilityLabel="Profile Picture"
                />
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#333' }}>John Doe</Text>
                <Text style={{ fontSize: 16, color: '#777', marginBottom: 20 }}>Software Developer</Text>
            </View>

            <View 
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    marginHorizontal: 20,
                    borderRadius: 20,
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <View style={{ alignItems: 'center' }}>
                    <MaterialIcons name="email" size={30} color="#555" />
                    <Text style={{ fontSize: 16, color: '#555', marginTop: 5 }}>tes@gmail.com</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <MaterialIcons name="phone" size={30} color="#555" />
                    <Text style={{ fontSize: 16, color: '#555', marginTop: 5 }}>1234567890</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <MaterialIcons name="location-on" size={30} color="#555" />
                    <Text style={{ fontSize: 16, color: '#555', marginTop: 5 }}>123, Main Street, City</Text>
                </View>
            </View>
        </ImageBackground>
    </SafeAreaView>
);

export default ProfileScreen;
