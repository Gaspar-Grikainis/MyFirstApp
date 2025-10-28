import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  // const theme = useColorScheme();
  const [theme, test] = useState("dark");
  const backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
  const textColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>Home Screen 🏠</Text>
      <Text style={[styles.text, {color: textColor}]}>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 20, marginBottom: 10 },
});
