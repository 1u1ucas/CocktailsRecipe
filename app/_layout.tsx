import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Accueil', headerShown: false }}/>
      <Stack.Screen name="counter" options={{ title: 'Compteur', headerShown: false }}/>
    </Stack>
  );
} 