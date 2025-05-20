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
  useWindowDimensions,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import useOrientation from "./useOrientation";

export default function App() {
  const { width, height } = useWindowDimensions();
  console.log("width", width);
  const landscape = width > height;
  console.log("landscape", landscape);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "orange",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      />
    </SafeAreaView>
  );
}

// one good reason to use StyleSheet.create is that it will validate the styles at compile time, which means if you have a typo, it will throw an error
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // this is the proper way to calculate the status bar height for android
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
