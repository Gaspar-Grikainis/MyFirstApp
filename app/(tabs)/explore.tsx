import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function ExploreScreen() {

  const theme = useColorScheme();

  const backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
  const colorText = theme === "dark" ? "#ffffff" : "#000000"; 

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: colorText}]}>This is the Explore tab 🌍</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24 },
});
