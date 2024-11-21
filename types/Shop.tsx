import { ImageSourcePropType } from "react-native";

export type ShopType = {
  id: number;
  name: string;
  rating: number;
  address: string;
  description: string;
  image: ImageSourcePropType;
};
