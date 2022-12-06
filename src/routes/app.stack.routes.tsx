import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AboutUs } from "../screens/MySettings/Settings/AboutUs";
import { ChangePassword } from "../screens/MySettings/Settings/ManageMyAccount/ChangePassword";
import { ContactPreferences } from "../screens/MySettings/Settings/ContactPreferences";
import { DeleteMyAccount } from "../screens/MySettings/Settings/ManageMyAccount/DeleteMyAccount";
import { EmailVerification } from "../screens/MySettings/Settings/ManageMyAccount/EmailVerification";
import { Home } from "../screens/Home";
import { ManageMyAccount } from "../screens/MySettings/Settings/ManageMyAccount";
import { MyAddress } from "../screens/MySettings/Settings/MyAddress";
import { MyCards } from "../screens/MyProfile/MyCards";
import { MyCoupons } from "../screens/MyProfile/MyCoupons";
import { MyGiftCards } from "../screens/MyProfile/MyGiftCards";
import { MyOrders } from "../screens/MyProfile/MyOrders";
import { MySettings } from "../screens/MySettings";
import { useHiddenTabs } from "../hooks/useHiddenTabs";

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

      <Screen
        name="Preferências de contato"
        component={ContactPreferences}
        options={{ headerShown: true }}
      />

      <Screen
        name="Verificação do Email"
        component={EmailVerification}
        options={{ headerShown: true }}
      />

      <Screen
        name="Altere a Senha"
        component={ChangePassword}
        options={{ headerShown: true }}
      />

      <Screen
        name="Deletar Conta"
        component={DeleteMyAccount}
        options={{ headerShown: true }}
      />

      <Screen
        name="Sobre Nós"
        component={AboutUs}
        options={{ headerShown: true }}
      />
      <Screen
        name="Meus Cupons"
        component={MyCoupons}
        options={{ headerShown: true }}
      />
      <Screen
        name="Meus Cartões"
        component={MyCards}
        options={{ headerShown: true }}
      />

      <Screen
        name="Cartão de presente"
        component={MyGiftCards}
        options={{ headerShown: true }}
      />

      <Screen
        name="Meus Pedidos"
        component={MyOrders}
        options={{ headerShown: true }}
      />
    </Navigator>
  );
}
