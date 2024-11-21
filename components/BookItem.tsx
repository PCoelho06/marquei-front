import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Alert,
  Linking,
} from "react-native";
import React from "react";
import { BookItemType } from "@/types/Book";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {
  item: BookItemType;
  type: "next" | "past";
};

const BookItem = ({ item, type }: Props) => {
  let buttons;
  let width = type === "next" ? 100 : 80;

  const scheme = Platform.select({
    ios: "maps://0,0?q=",
    android: "geo:0,0?q=",
  });
  const label = `${item.title} @ ${item.address}`;
  const url = Platform.select({
    ios: `${scheme}${label}@${item.address}`,
    android: `${scheme}${item.address}(${label})`,
  });

  if (type === "next") {
    buttons = (
      <View style={{ flexDirection: "row", gap: 8, marginVertical: 8 }}>
        <FontAwesome6.Button
          name="diamond-turn-right"
          backgroundColor="black"
          style={styles.button}
          onPress={() => {
            if (url) {
              Linking.openURL(url);
            }
          }}
        >
          Direções
        </FontAwesome6.Button>
        <FontAwesome6.Button
          name="calendar-xmark"
          backgroundColor="red"
          style={styles.button}
          onPress={() => {
            Alert.alert(
              "Confirmar Cancelamento",
              "Tem certeza de que deseja cancelar o apontamento ?",
              [
                {
                  text: "Não",
                  style: "cancel",
                },
                {
                  text: "Sim",
                  onPress: () => {
                    // Handle the cancellation logic here
                  },
                },
              ],
              { cancelable: true }
            );
          }}
        >
          Cancelar
        </FontAwesome6.Button>
      </View>
    );
  } else {
    buttons = (
      <View style={{ marginVertical: 8 }}>
        <FontAwesome5.Button
          name="redo"
          backgroundColor="black"
          style={styles.smallButton}
          onPress={() => {
            router.push({
              pathname: "/(tabs)/saloes/[id]",
              params: { id: item.id },
            });
          }}
        >
          Tornar a agendar
        </FontAwesome5.Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={[styles.image, { width: width, height: width }]}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.service}>{item.service}</Text>
        <Text>
          <FontAwesome5 name="calendar-alt" size={16} color="black" />{" "}
          {item.date} as {item.time}
        </Text>
        {type === "next" && (
          <Text>
            <FontAwesome6 name="location-dot" size={16} color="black" />{" "}
            {item.address}
          </Text>
        )}
        {buttons}
      </View>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    marginVertical: 8,
  },
  image: {
    borderRadius: 12,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  service: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  button: {
    marginHorizontal: "auto",
    paddingHorizontal: 16,
  },
  smallButton: {
    marginHorizontal: "auto",
  },
  details: {
    flex: 2.5,
  },
});
