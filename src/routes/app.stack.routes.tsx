import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useHiddenTabs } from "../hooks/useHiddenTabs";
import { Home } from "../screens/Home";
import { ManageMyAccount } from "../screens/ManageMyAccount";
import { MyAddress } from "../screens/MyAddress";
import {  MySettings } from "../screens/MySettings";

const { Navigator, Screen } = createNativeStackNavigator();
const routesWithoutTabs = ["Configurações"];

export function AppStackRoutes() {
  useHiddenTabs(routesWithoutTabs, "FallbackRoute");

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Screen name="HomeScreen" component={Home} />

      <Screen
        name="Configurações"
        component={MySettings}
        options={{ headerShown: true }}
      />

      <Screen
        name="Meu Endereço"
        component={MyAddress}
        options={{ headerShown: true }}
      />

<Screen
        name="Gerenciar minha conta"
        component={ManageMyAccount}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
}
