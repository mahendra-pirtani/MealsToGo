import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor: "red" }}>
          <Text>Red</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "blue", padding: 16 }}>
          <Text>Blue</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
