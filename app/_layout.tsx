import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "P3K" }} />
      <Stack.Screen
        name="definisi"
        options={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: () => {
            return (
              <Text
                style={{
                  display: "none",
                }}
              ></Text>
            );
          },
          headerStyle: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          headerTintColor: "white",
        }}
      />

      <Stack.Screen
        name="etiologi"
        options={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: () => {
            return (
              <Text
                style={{
                  display: "none",
                }}
              ></Text>
            );
          },
          headerStyle: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          headerTintColor: "white",
        }}
      />

      <Stack.Screen
        name="klasifikasi"
        options={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: () => {
            return (
              <Text
                style={{
                  display: "none",
                }}
              ></Text>
            );
          },
          headerStyle: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
