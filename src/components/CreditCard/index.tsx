import React from "react";
import { Entypo } from "@expo/vector-icons";
import { ImageBackground } from "react-native";

import MasterCardLogo from "../../assets/mc_symbol.svg";
import { Card, Container, DeleteButton, Title } from "./styles";

export function CreditCard() {
  return (
    <Container>
      <Card>
        <Title>Mastercard</Title>
        <Title>**** 1234</Title>
        <MasterCardLogo
          width={120}
          height={120}
          style={{ position: "absolute", right: 30, bottom: 20 }}
        />
        <DeleteButton>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </DeleteButton>
      </Card>
    </Container>
  );
}
