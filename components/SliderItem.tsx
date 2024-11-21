import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SliderItemType } from "@/types/Slider";

type Props = {
  item: SliderItemType;
};

const SliderItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});
