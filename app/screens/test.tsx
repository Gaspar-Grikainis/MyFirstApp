import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function TestScreen(){
    const router = useRouter();

    return (
        <View>
            <Text>This is the Test Screen!</Text>
            <Button title="Go to Hello" onPress={() => router.push("/screens/hello") } />
        </View>
    );
}