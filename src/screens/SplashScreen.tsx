import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const images = [
        { uri: 'https://w.wallha.com/ws/15/oAhFTu8N.jpg', text: 'Search for an outfit by taking a photo or uploading an image' },
        { uri: 'https://w.wallha.com/ws/15/hON2G0Xx.jpg', text: 'Explore various styles and get inspired' },
        { uri: 'https://w.wallha.com/ws/15/ma1c0kux.jpg', text: 'Find the perfect outfit for any occasion' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate('Tabs');
        }
    };

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <Image
                style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                source={{ uri: images[currentIndex].uri }}
            />
            <View style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }} />
            <View style={{ position: 'absolute', bottom: 250, width: '100%', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 28, marginBottom: 20, textAlign: 'center', paddingHorizontal: 20, fontFamily: 'MetroBold' }}>
                    {images[currentIndex].text}
                </Text>
                <View style={{ flex: 1, width: '100%', padding: 10 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#FF3B30', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, marginBottom: 10 }}
                        onPress={nextImage}
                    >
                        <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', fontFamily: 'MetroMedium' }}>
                            {currentIndex < images.length - 1 ? 'NEXT' : 'GET STARTED'}
                        </Text>
                    </TouchableOpacity>
                    {currentIndex > 0 && (
                        <TouchableOpacity
                            style={{ borderWidth: 2, borderColor: '#fff', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, marginBottom: 10 }}
                            onPress={prevImage}
                        >
                            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', fontFamily: 'MetroMedium' }}>PREVIOUS</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};

export default SplashScreen;
