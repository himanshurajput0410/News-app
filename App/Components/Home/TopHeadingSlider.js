import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

const TopHeadingSlider = ({ newsList }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={newsList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("read-news", { news: item })}
            style={{
              width: Dimensions.get("screen").width * 0.8,
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.77,
                borderRadius: 10,
              }}
            />
            <Text
              numberOfLines={3}
              style={{ marginTop: 10, fontWeight: 800, fontSize: 22 }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: Color.primary,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopHeadingSlider;
