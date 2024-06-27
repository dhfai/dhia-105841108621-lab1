import { useFonts } from "expo-font"
import { Text, View } from "react-native"

export default function App() {
  const [fontsLoaded] = useFonts({
    "MetroBlack": require("./assets/fonts/Metropolis-Black.otf"),
    "MetroBold": require("./assets/fonts/Metropolis-Bold.otf"),
    "MetroLight": require("./assets/fonts/Metropolis-Light.otf"),
    "MetroSemibold": require("./assets/fonts/Metropolis-SemiBold.otf"),
  })
  
  if (!fontsLoaded) {
    return <View><Text>Font tidak ada </Text></View>
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "MetroBlack" }}>Metro Black</Text>
      <Text style={{ fontFamily: "MetroBold" }}>Metro Bold</Text>
      <Text style={{ fontFamily: "MetroLight" }}>Metro Light</Text>
      <Text style={{ fontFamily: "MetroSemibold" }}>Metro Semi Bold</Text>
      <Text>Font biasa</Text>
    </View>
  )
}