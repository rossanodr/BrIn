import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { useTheme } from "styled-components";

/**
 * This function hides the tab bar when the user navigates to a route that is in the
 * hiddenTabRoutesArray, and shows the tab bar when the user navigates to a route that is not in the
 * hiddenTabRoutesArray.
 * @param {string[]} hiddenTabRoutesArray - An array of routes that you want to hide the tab bar on.
 * @param {string} fallbackRoute - This is the route that will be used if the route is not found.
 */
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
