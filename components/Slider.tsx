import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import SliderItem from "./SliderItem";
import { SliderItemType } from "../types/Slider";

type Props = {
  data: SliderItemType[];
};

const Slider = (props: Props) => {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Slider;
