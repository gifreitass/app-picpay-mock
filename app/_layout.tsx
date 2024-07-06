import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../src/assets/fonts/Montserrat.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="homepage" options={{ headerShown: false }}/>
      <Stack.Screen name='sign-up-create' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up-number' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up-code' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up-mail' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up-cep' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up-address' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up-wage' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up-password' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up-confirmation' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up-success' options={{ headerShown: false }} />
      <Stack.Screen name='logged-in-home' options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
