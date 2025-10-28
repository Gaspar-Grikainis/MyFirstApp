import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function SettingsScreen(){
    const theme = useColorScheme();
    const backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
    const textColor = theme === "dark" ? "#ffffff" : "#000000";

    return (
    <View style={[styles.container, {backgroundColor}]}>
        <Text style={[styles.title, { color: textColor}]}>Settings?</Text>
        <Text style={[styles.text , {color: textColor}]}>
            This is my settings screen
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
});