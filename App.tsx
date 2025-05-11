import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Pressed");
  };
  return (
    // SafeAreaView is used to render the content within the safe area boundaries of a device
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hey, I am building a cool React Native app
      </Text>
      <TouchableHighlight onPress={handlePress}>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{ width: 400, height: 400 }}
        />
      </TouchableHighlight>
      <Button
        title={"Alert Buton"}
        color={"red"}
        onPress={() =>
          Alert.alert("Custom Title", "Custom Message", [
            { text: "Yes", onPress: () => console.log("Yes Pressed") },

            { text: "No", onPress: () => console.log("No pressed") },
          ])
        }
      />
      {/* This Prompt button doesn't work on Android */}
      <Button
        title={"Prompt Button"}
        color={"red"}
        onPress={() =>
          Alert.prompt("Custom Title", "Custom Message", (text) =>
            console.log(text)
          )
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

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
