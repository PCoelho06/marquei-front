import { FlatList, View } from "react-native";
import React from "react";
import BookItem from "./BookItem";
import { BookItemType } from "../types/Book";

type Props = {
  data: BookItemType[];
  type: "next" | "past";
};

const Book = (props: Props) => {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <BookItem item={item} type={props.type} />}
      />
    </View>
  );
};

export default Book;
