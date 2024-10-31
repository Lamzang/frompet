import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Link href={"/"}>Go to Home</Link>
      </View>
    </>
  );
}
