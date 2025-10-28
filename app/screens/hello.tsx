import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HelloScreen(){
    const router = useRouter();
    
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
        <Text style={{ fontSize: 20}}>Hello Screen</Text>
        <Button title="Go to Test" onPress={() => router.push("/screens/test")}/>
        </View>
    );
}