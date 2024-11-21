import { ImageSourcePropType } from "react-native";

export type BookItemType = {
  id: number;
  title: string;
  service: string;
  date: string;
  time: string;
  address: string;
  image: ImageSourcePropType;
};
