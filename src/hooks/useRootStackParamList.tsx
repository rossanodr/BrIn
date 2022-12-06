import React from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export function useRootStackParamList() {
  const RootStackParamList = useNavigation<NavigationProp<ParamListBase>>();
  return RootStackParamList;

}
