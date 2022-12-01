import { useLayoutEffect } from "react";
import {
  useNavigation,
  useRoute,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { useTheme } from "styled-components";

export function useHiddenTabs(
  hiddenTabRoutesArray: string[],
  fallbackRoute: string
) {
const theme = useTheme()
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? fallbackRoute;

    navigation.setOptions(
      hiddenTabRoutesArray.includes(routeName)
        ? { tabBarStyle: { display: "none" } }
        : {
          headerShown: false,
          tabBarActiveTintColor: theme.COLORS.danger,
          tabBarInactiveTintColor: theme.COLORS.danger_tint,
          tabBarLabelStyle: {
            paddingBottom: 5,
            fontSize: 10,
          },
  
          tabBarStyle: {
            paddingTop: 5,
            height: 50,
  
            backgroundColor: theme.COLORS.light_background,
          },
          }
    );
  }, [navigation, route]);
}
