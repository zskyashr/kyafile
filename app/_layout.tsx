import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "bitcount-medium": require("../../assets/fonts/BitcountGridSingle-Medium.ttf"),
    "bitcount-variable": require("../../assets/fonts/BitcountGridSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "bitcount-prop-regular": require("../../assets/fonts/BitcountPropDouble-Regular.ttf"),
    "bitcount-prop-variable": require("../../assets/fonts/BitcountPropDouble-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "bitcount-extrabold": require("../../assets/fonts/BitcountSingle-ExtraBold.ttf"),
    "bitcount-single-variable": require("../../assets/fonts/BitcountSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "inter-extrabold": require("../../assets/fonts/Inter_24pt-ExtraBold.ttf"),
    "inter-variable": require("../../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    "opensans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
    "opensans-variable": require("../../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"), // perbaikan dari sebelumnya
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return <Stack />;
}
