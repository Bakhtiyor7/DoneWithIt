import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hey, I am building a cool React Native app
      </Text>

      <Image
        blurRadius={5}
        fadeDuration={1000}
        style={{ width: 200, height: 300 }}
        source={{
          uri: "https://picsum.photos/200/300",
        }}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
