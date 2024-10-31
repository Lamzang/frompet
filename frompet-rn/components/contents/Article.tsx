import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
//https://github.com/robinhuy/react-native-expo-examples.git
export default function Article({ item }: { item: any }) {
  return (
    <View>
      <View>
        <View>
          <TouchableOpacity>
            <Image source={item.avatar} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text numberOfLines={1}>{item.name}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={16} color="black" />
        </TouchableOpacity>
      </View>

      <Image source={item.image} />
    </View>
  );
}
