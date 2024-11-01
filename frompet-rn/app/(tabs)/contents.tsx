import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Article from "../../components/contents/Article";
import Header from "../../components/contents/Header";
import Stories from "../../components/contents/Stories";
import { articles } from "../../components/data";

export default function Contents() {
  const renderItem = ({ item }: { item: any }) => <Article item={item} />;
  const renderHeader = () => (
    <View style={styles.stories}>
      <Stories />
    </View>
  );
  const keyExtractor = (item: any) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Header />
      </View>

      {/* https://reactnative.dev/docs/flatlist */}
      <FlatList
        data={articles}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const BORDER_BOTTOM = {
  borderBottomWidth: 1,
  borderBottomColor: "#dbdbdb",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    ...BORDER_BOTTOM,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
  },
  stories: {
    ...BORDER_BOTTOM,
    height: 104,
    paddingVertical: 10,
    paddingLeft: 8,
    backgroundColor: "#fafafa",
  },
});
