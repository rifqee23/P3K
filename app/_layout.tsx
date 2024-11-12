import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "P3K" }} />
      <Stack.Screen name="definisi" />
    </Stack>
  );
}
