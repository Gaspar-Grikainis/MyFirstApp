import { Tabs } from "expo-router"

export default function ScreensLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="hello" options={{title: "Hello"}}/>
            <Tabs.Screen name="test" options={{title: "Test"}}/>
        </Tabs>
    )
}