import { Button, Text, View } from "react-native";

export function HomeScreen({ navigation}: {navigation: React.ComponentProps<any>}) {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
          fontFamily: 'MetroBlack',
        }}>Splace Screen</Text>
        <Button title="Ke Halaman Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }