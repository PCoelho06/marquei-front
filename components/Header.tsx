import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} dynamicTypeRamp="title1">
        Marquei
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: "bold",
  },
});
