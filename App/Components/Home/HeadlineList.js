import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";

const HeadlineList = ({ newsList }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                height: 1,
                backgroundColor: Color.lightGray,
                marginTop: 10,
                marginLeft: -20,
              }}
            ></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("read-news", { news: item })}
              style={{ marginTop: 15, display: "flex", flexDirection: "row" }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ height: 130, width: 130, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 10, marginRight: 130 }}>
                <Text
                  numberOfLines={4}
                  style={{ fontWeight: 800, fontSize: 18 }}
                >
                  {item.title}
                </Text>
                <Text style={{ marginTop: 6, color: Color.primary }}>
                  {item?.source?.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HeadlineList;
