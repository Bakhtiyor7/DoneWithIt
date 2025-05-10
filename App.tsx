import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
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
      <TouchableHighlight onPress={handlePress}>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{ width: 400, height: 400 }}
        />
      </TouchableHighlight>
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
