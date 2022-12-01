import React from "react";
import { Button } from "../../components/Button";
import { MenuButton } from "../../components/MenuButton";
import { useRootStackParamList } from "../../hooks/useRootStackParamList";

import { Container, Content } from "./styles";

export function ManageMyAccount() {
  const navigation = useRootStackParamList();
  function handleGoBack() {
    console.log("goBack");
    navigation.goBack();
  }

  function handleNavigation(screen: string) {
    navigation.navigate(screen);
  }

  return (
    <Container>
      <Content>
        <MenuButton title="verificação do Email" />
        <MenuButton title="Número de telefone" />
        <MenuButton title="Altere a Senha" />
        <MenuButton title="Deletar Conta" />
      </Content>
    </Container>
  );
}
