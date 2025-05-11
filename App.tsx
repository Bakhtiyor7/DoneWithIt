import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Pressed");
  };
  return (
    // SafeAreaView is used to render the content within the safe area boundaries of a device
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          width: "100%",
          height: "40%",
          backgroundColor: "orange",
        }}
      ></View>
    </SafeAreaView>
  );
}

// one good reason to use StyleSheet.create is that it will validate the styles at compile time, which means if you have a typo, it will throw an error
const styles = StyleSheet.create({
  container: {
    // this is the proper way to calculate the status bar height for android
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
