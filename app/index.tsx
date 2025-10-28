import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
      }}
    />
    <View
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'green',
      }}
    />
    <View
      style={{
        width: 400,
        height: 20,
        backgroundColor: 'steelblue',
      }}
    />
    <Text style={[styles.greeny, styles.big, styles.purpley]}>
      Trying to edit this part. awesome
    </Text>

    <View
      style={{
        width: 500,
        height: 80,
        backgroundColor: 'powderblue'
      }}
    />

    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 50,
  },
  greeny: {
    color: 'green',
    fontWeight: 'bold', 
  },
  purpley: {
    color: 'purple',
    fontWeight: 'thin',
  },
  small: {
    fontSize: 10,
  },
  big: {
    fontSize: 30
  }

});