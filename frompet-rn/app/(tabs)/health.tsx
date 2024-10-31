import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function HealthScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>건강관리</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
