import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Color from "../../Shared/Color";

const CategoryTextslider = ({ selectCategory }) => {
  const [active, setActive] = useState(1);
  const categoryList = [
    {
      id: 1,
      name: "Latest",
    },
    {
      id: 2,
      name: "World",
    },
    {
      id: 3,
      name: "Business",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "Life ",
    },
    {
      id: 6,
      name: "Movie",
    },
  ];

  const onCategoryClick = (id) => {
    setActive(id);
  };
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        horizontal={true}
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              onCategoryClick(item.id);
              selectCategory(item.name);
            }}
          >
            <Text
              style={
                item.id === active ? styles.selectedText : styles.unselectedText
              }
            >
              {" "}
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  unselectedText: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: "800",
    color: Color.gray,
  },
  selectedText: {
    marginRight: 15,
    fontSize: 20,
    fontWeight: "900",
    color: Color.primary,
  },
});

export default CategoryTextslider;
