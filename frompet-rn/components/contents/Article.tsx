import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Article({ item }: { item: any }) {
  const [articleImageRatio, setArticleImageRatio] = useState(1);

  useEffect(() => {
    Image.getSize(item.image, (width, height) => {
      setArticleImageRatio(width / height);
    });
  }, [item.image]);
  return (
    <View style={stlyes.article}>
      <View style={stlyes.header}>
        <View style={stlyes.user}>
          <TouchableOpacity>
            <Image source={item.avatar} style={stlyes.avatar} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text numberOfLines={1} style={stlyes.name}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={16} color="black" />
        </TouchableOpacity>
      </View>

      <Image
        source={item.image}
        style={[stlyes.image, { aspectRatio: articleImageRatio }]}
      />

      <View style={stlyes.action}>
        <View style={stlyes.actionLeft}>
          <TouchableOpacity style={stlyes.actionButton}>
            <Feather name="heart" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={stlyes.actionButton}>
            <Feather name="message-circle" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={stlyes.actionButton}>
            <Feather name="send" size={24} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={stlyes.actionButton}>
            <Feather name="bookmark" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={stlyes.info}>
        <Text style={stlyes.likeCount}>{item.likeCount} likes</Text>
        <Text style={stlyes.date}>{item.date}</Text>
      </View>
    </View>
  );
}

const stlyes = StyleSheet.create({
  article: {
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    paddingHorizontal: 16,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  name: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 14,
    color: "#262626",
    marginLeft: 12,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: null,
    resizeMode: "contain",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    paddingHorizontal: 8,
  },
  actionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    padding: 8,
  },
  info: {
    paddingHorizontal: 16,
  },
  likeCount: {
    color: "#262626",
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    color: "#8e8e8e",
    fontSize: 10,
    marginBottom: 5,
  },
});
