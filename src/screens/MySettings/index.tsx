import React from "react";
import { Button } from "../../components/Button";
import { MenuButton } from "../../components/MenuButton";
import { useRootStackParamList } from "../../hooks/useRootStackParamList";

import { Container, Content } from "./styles";

export function MySettings() {
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
        <MenuButton
          title="Lista de Endereços"
          onPress={() => handleNavigation("Meu Endereço")}
        />
        <MenuButton
          title="Gerenciar minha conta"
          onPress={() => handleNavigation("Gerenciar minha conta")}
        />
      </Content>
      <Content>
        <MenuButton title="Localização" description="BR" />
        <MenuButton title="Idioma" description="Português (Brasil)" />
        <MenuButton
          title="Preferências de contato"
          description="Português (Brasil)"
        />
      </Content>
      <Content>
        <MenuButton title="Avaliação e feedback" />
        <MenuButton title="Sobre a BrIn" />
      </Content>
      <Button title="SAIR" type="white" onPress={handleGoBack} />
    </Container>
  );
}
