import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import DressOutlined from "../assets/dress-outlined.svg";
import Dress from "../assets/dress.svg";
import LipStickOutlined from "../assets/lipstick-outlined.svg";
import LipStick from "../assets/lipstick.svg";

import { useTheme } from "styled-components";

import { Home } from "../screens/Home";
import { Categories } from "../screens/Categories";
import {  News } from "../screens/News";
import { MyProfile } from "../screens/MyProfile";
import { AppStackRoutes } from "./app.stack.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
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
      }}
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={18} color={color} />
            ) : (
              <Ionicons name="home-outline" size={18} color={color} />
            ),
        }}
      />
      <Screen
        name="Categorias"
        component={Categories}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="briefcase-search"
                size={18}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="briefcase-search-outline"
                size={18}
                color={color}
              />
            ),
        }}
      />
      <Screen
        name="Novidades"
        component={News}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Dress width={18} height={18} fill={color} />
            ) : (
              <DressOutlined width={18} height={18} fill={color} />
            ),
        }}
      />
      <Screen
        name="Estilistas"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <LipStick width={18} height={18} fill={color} />
            ) : (
              <LipStickOutlined width={18} height={18} fill={color} />
            ),
        }}
      />
      <Screen
        name="Perfil"
        component={MyProfile}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="person" size={18} color={color} />
            ) : (
              <Ionicons name="person-outline" size={18} color={color} />
            ),
        }}
      />
    </Navigator>
  );
}
