import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout(){
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: true, // show screen header
      }}
    >

      <Tabs.Screen
        name="screens/hello"
        options={{
          title: "Hello",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="happy" color={color} size={size}/>
          ),
        }}
      />
      <Tabs.Screen
        name="screens/test"
        options={{
          title: "Test",
          tabBarIcon: ({color, size}) => (
            <Ionicons name="document-text" color={color} size={size}/>
          ),
        }}
        />

    </Tabs>
  );
}

// export default function RootLayout() {
//   return ( 
    
//     <Tabs>
//       <Tabs.Screen name="index" options={{title: "index"}}/>
//       <Tabs.Screen name="screens/test" options={{title: "Test"}}/>
//       <Tabs.Screen name="screens/hello" options={{title: "Hello"}}/>
//     </Tabs>

//   );
// }
