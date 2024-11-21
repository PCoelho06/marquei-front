import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ShopType } from "@/types/Shop";

type Props = {
  data: ShopType;
};

const Banner = ({ data }: Props) => {
  //fetch data from api

  return (
    <View>
      <Image
        source={{ uri: `https://picsum.photos/1600/900` }}
        style={styles.image}
      />
      <View style={styles.banner}>
        <View style={styles.infos}>
          <Text style={styles.name}>
            {data.name},{" "}
            <FontAwesome name="star" style={styles.rating}>
              {" "}
              ,{data.rating}
            </FontAwesome>
          </Text>
          <Text style={styles.address}>{data.address}</Text>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
    top: 0,
  },
  image: {
    width: "100%",
    height: 300,
    position: "relative",
  },
  infos: {
    marginTop: "auto",
    marginLeft: 16,
    marginBottom: 16,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  address: {
    fontSize: 16,
    color: "white",
  },
  rating: {
    fontSize: 16,
  },
});
