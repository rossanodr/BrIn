import React from "react";

import { Button } from "../../components/Button";
import { Container, Content } from "./styles";
import { MenuButton } from "../../components/MenuButton";
import { useHandleNavigation } from "../../hooks/useHandleNavigation";
import { useRootStackParamList } from "../../hooks/useRootStackParamList";

export function MySettings() {
  const { handleGoBack, handleNavigation } = useHandleNavigation();

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
        <MenuButton title="Idioma" description="Português (Brasil)" />
        <MenuButton
          title="Preferências de contato"
          onPress={() => handleNavigation("Preferências de contato")}
        />
      </Content>
      <Content>
        <MenuButton title="Avaliação e feedback" />
        <MenuButton
          title="Sobre a BrIn"
          onPress={() => handleNavigation("Sobre Nós")}
        />
      </Content>
      <Button title="SAIR" type="white" onPress={handleGoBack} />
    </Container>
  );
}
