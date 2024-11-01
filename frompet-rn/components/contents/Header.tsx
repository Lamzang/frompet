import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Feather name="camera" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.logo}>게시물</Text>

      <TouchableOpacity style={styles.iconButton}>
        <Feather name="send" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconButton: {
    padding: 8,
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
