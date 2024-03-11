import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

const ReadNews = () => {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  useEffect(() => {
    console.log(news);
  }, []);

  const shareNews = () => {
    Share.share({
      message: news.title + "\nRead More" + news.description,
    });
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          marginBottom: 12,
          marginTop: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => shareNews()}>
          <Ionicons name="share-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ height: 300, width: "100%", borderRadius: 15 }}
      />

      <Text style={{ marginTop: 10, fontWeight: 800, fontSize: 18 }}>
        {news.title}
      </Text>
      <Text style={{ marginTop: 10, color: Color.primary, fontSize: 16 }}>
        {news.source.name}
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          color: Color.gray,
          lineHeight: 26,
        }}
      >
        {news.description}
      </Text>
      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
        <Text
          style={{
            marginTop: 10,
            color: Color.primary,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Read More
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ReadNews;
