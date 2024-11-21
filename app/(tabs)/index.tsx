import Slider from "@/components/Slider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, StyleSheet, View } from "react-native";
import Header from "@/components/Header";

const data = [
  {
    id: 1,
    title: "Cabeleireiro",
    image: require("@/assets/images/cabeleireiro.jpg"),
  },
  {
    id: 2,
    title: "Barbeiro",
    image: require("@/assets/images/barbeiro.jpg"),
  },
  {
    id: 5,
    title: "Esteticista",
    image: require("@/assets/images/salao.jpg"),
  },
  {
    id: 6,
    title: "Massagista",
    image: require("@/assets/images/massagem.jpg"),
  },
];

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 12 }}>
      <Header />
      <TextInput
        style={styles.input}
        returnKeyType="search"
        placeholder="Procurar um serviço"
        onSubmitEditing={(e) => console.log(e.nativeEvent.text)}
      />
      <View style={styles.section}>
        <Text style={styles.title}>Categorias</Text>
        <Slider data={data} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Ultimas reservas</Text>
        <Slider data={data} />
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
});
