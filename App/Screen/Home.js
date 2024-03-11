import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import CategoryTextslider from "../Components/Home/CategoryTextslider";
import Color from "../Shared/Color";
import { Ionicons } from "@expo/vector-icons";
import TopHeadingSlider from "../Components/Home/TopHeadingSlider";
import HeadlineList from "../Components/Home/HeadlineList";
import GlobalApi from "../Services/GlobalApi";

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // getTopHeadline();
    getNewsByCategory("latest");
  }, []);
  const getNewsByCategory = async (category) => {
    setLoading(true);
    const result = (await GlobalApi.getByCategory(category)).data;
    setNewsList(result.articles);
    setLoading(false);
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.appName}> Himanshu </Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <CategoryTextslider
        selectCategory={(category) => getNewsByCategory(category)}
      />
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: Dimensions.get("screen").height * 0.4,
          }}
          size={"medium"}
          color={Color.primary}
        />
      ) : (
        <>
          <TopHeadingSlider newsList={newsList} />
          <HeadlineList newsList={newsList} />
        </>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color.primary,
  },
});
export default Home;
