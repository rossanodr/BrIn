import React from "react";

import { Container, Content } from "./styles";
import { MenuButton } from "../../../../components/MenuButton";
import { useHandleNavigation } from "../../../../hooks/useHandleNavigation";

export function ManageMyAccount() {
  const { handleNavigation, handleGoBack } = useHandleNavigation();

  return (
    <Container>
      <Content>
        <MenuButton
          title="Verificação do Email"
          onPress={() => handleNavigation("Verificação do Email")}
        />
        <MenuButton title="Número de telefone" />
        <MenuButton title="Altere a Senha" onPress={() => handleNavigation("Altere a Senha")}/>
        <MenuButton title="Deletar Conta" onPress={() => handleNavigation("Deletar Conta")}/>
      </Content>
    </Container>
  );
}
