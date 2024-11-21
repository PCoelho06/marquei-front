import Header from "@/components/Header";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Book from "@/components/Book";
import { FontAwesome6 } from "@expo/vector-icons";

const nextBookings = [
  {
    id: 1,
    title: "Salão Maria",
    service: "Corte de cabelo",
    date: "20/11/2024",
    time: "10:00",
    address: "Place Massena 06100 Nice",
    image: require("@/assets/images/cabeleireiro.jpg"),
  },
];

const pastBookings = [
  {
    id: 1,
    title: "Salão Maria",
    service: "Manicure",
    date: "15/11/2024",
    time: "10:00",
    address: "13 rue des Graviers 25700 Valentigney",
    image: require("@/assets/images/salao.jpg"),
  },
  {
    id: 3,
    title: "Salão Maria",
    service: "Depilação",
    date: "14/11/2024",
    time: "14:00",
    address: "98 rue Brillat-Savarin 75013 Paris",
    image: require("@/assets/images/depilacao.jpg"),
  },
  {
    id: 4,
    title: "Salão Maria",
    service: "Massagem",
    date: "13/11/2024",
    time: "18:00",
    address: "1 allée Altaïr 64400 Anglet",
    image: require("@/assets/images/massagem.jpg"),
  },
];

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 12 }}>
      <Header />
      <View style={styles.section}>
        <Text style={styles.title}>Próximos agendamentos</Text>
        <Book data={nextBookings} type="next" />
        {nextBookings.length > 1 && (
          <FontAwesome6.Button
            name="eye"
            backgroundColor="black"
            style={styles.button}
          >
            Vers mais
          </FontAwesome6.Button>
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Agendamentos passados</Text>
        <Book data={pastBookings} type="past" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    marginHorizontal: 24,
    marginVertical: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: "black",
  },
  title: {
    marginVertical: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    marginVertical: 16,
  },
  button: {
    marginVertical: 8,
    marginHorizontal: "auto",
    paddingHorizontal: 16,
  },
});
