import React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                    style={{ width: '100%', height: 500 }}
                    source={{uri: 'https://w.wallha.com/ws/15/hzk8V2fR.jpg'}}
                />
                <View style={{
                    position: 'absolute',
                    top: 350,
                    left: 20,
                    right: 20,
                }}>
                    <Text style={{ color: '#fff', fontSize: 42, fontFamily: 'MetroBlack' }}>Fashion sale</Text>
                    <TouchableOpacity style={{
                        backgroundColor: '#FF3B30',
                        paddingVertical: 10,
                        paddingHorizontal: 40,
                        borderRadius: 25,
                        width: 150,
                        marginTop: 10
                    }} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'MetroMedium', textAlign: 'center' }}>Check</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>New</Text>
                <Text style={{ color: '#666', marginBottom: 20 }}>You've never seen it before!</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <View style={{ width: '48%', marginBottom: 20 }}>
                        <Image
                            style={{ width: '100%', height: 200, borderRadius: 10 }}
                            source={{uri: 'https://w.wallha.com/ws/15/Qbk3W20F.jpg'}}
                        />
                        <Text style={{ marginTop: 10 }}>New Item 1</Text>
                    </View>
                    <View style={{ width: '48%', marginBottom: 20 }}>
                        <Image
                            style={{ width: '100%', height: 200, borderRadius: 10 }}
                            source={{uri: 'https://th.wallha.com/ts/kGHXP5S9.jpg'}}
                        />
                        <Text style={{ marginTop: 10 }}>New Item 2</Text>
                    </View>
                    <View style={{ width: '48%', marginBottom: 20 }}>
                        <Image
                            style={{ width: '100%', height: 200, borderRadius: 10 }}
                            source={{uri: 'https://th.wallha.com/ts/pJzMy4kZ.jpg'}}
                        />
                        <Text style={{ marginTop: 10 }}>New Item 3</Text>
                    </View>
                    <View style={{ width: '48%', marginBottom: 20 }}>
                        <Image
                            style={{ width: '100%', height: 200, borderRadius: 10 }}
                            source={{uri: 'https://th.wallha.com/ts/c4Nj5nfO.jpg'}}
                        />
                        <Text style={{ marginTop: 10 }}>New Item 4</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
