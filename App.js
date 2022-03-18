import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  droidSafeArea: {
    backgroundColor: "#eee",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
