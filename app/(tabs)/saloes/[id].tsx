import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Linking,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "@/components/Banner";
import { FontAwesome } from "@expo/vector-icons";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  //fetch data from API
  const data = {
    id: Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10),
    name: "Salão Maria",
    rating: 4.8,
    address: "9 Travessa do Montinho 4780-505 Santo Tirso",
    phone: "+351 252 862 158",
    description: "Salão de beleza da Maria. Venha conhecer!",
    services: [
      {
        id: 1,
        name: "Corte de cabelo",
        duration: "30 min",
        price: 15,
        icon: "cut",
      },
      {
        id: 2,
        name: "Manicure",
        duration: "30 min",
        price: 10,
        icon: "hand-paper-o",
      },
      {
        id: 3,
        name: "Maquilhagem",
        duration: "30 min",
        price: 10,
        icon: "paint-brush",
      },
    ],
    image: require("@/assets/images/salao.jpg"),
  };

  const scheme = Platform.select({
    ios: "maps://0,0?q=",
    android: "geo:0,0?q=",
  });
  const label = `${data.name} @ ${data.address}`;
  const url = Platform.select({
    ios: `${scheme}${label}@${data.address}`,
    android: `${scheme}${data.address}(${label})`,
  });

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Banner data={data} />
      <View style={styles.section}>
        <Text>{data.description}</Text>
        <View
          style={{
            gap: 16,
            marginTop: 16,
          }}
        >
          <FontAwesome.Button
            name="map-marker"
            backgroundColor="black"
            style={styles.button}
            onPress={() => {
              if (url) {
                Linking.openURL(url);
              }
            }}
          >
            Ver no mapa
          </FontAwesome.Button>
          <FontAwesome.Button
            name="phone"
            backgroundColor="black"
            style={styles.button}
            onPress={() => {
              Linking.openURL(`tel:${data.phone}`);
            }}
          >
            Ligar
          </FontAwesome.Button>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Serviços</Text>
        <FlatList
          data={data.services}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <FontAwesome
                name={item.icon as "cut" | "paint-brush" | "hand-paper-o"}
                size={24}
                color="black"
                style={{
                  padding: 8,
                  borderWidth: 1,
                  borderRadius: 8,
                }}
              />
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text>
                  {item.duration} - {item.price}€
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    margin: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    marginVertical: 8,
    marginHorizontal: "auto",
  },
});
