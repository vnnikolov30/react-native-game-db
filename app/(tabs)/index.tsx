import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.gdlogo} className="w-20 h-20 mt-20 mb-5 mx-auto" />
        <View className="flex-1 mt-1">
          <SearchBar
            onPress={()=> router.push("/search")}
            placeholder="What do you want to play?"
          />
        </View>
      </ScrollView>
    </View>
  );
}
