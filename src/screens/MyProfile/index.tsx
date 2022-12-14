import React from "react";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

import {
  ButtonBox,
  ButtonText,
  Buttons,
  Container,
  Content,
  Title,
} from "./styles";
import { Header } from "../../components/Header";
import { useHandleNavigation } from "../../hooks/useHandleNavigation";
import { useRootStackParamList } from "../../hooks/useRootStackParamList";

export function MyProfile() {
  const { handleGoBack, handleNavigation } = useHandleNavigation();

  return (
    <Container>
      <Header showCategories={false} showSearchBar={false} />
      <Content>
        <Title>Oi, Rossano</Title>
        <ButtonBox>
          <Buttons onPress={() => handleNavigation("Configurações")}>
            <AntDesign name="setting" size={22} color="black" />
            <ButtonText>Configurações</ButtonText>
          </Buttons>
          <Buttons onPress={() => handleNavigation("Meus Cupons")}>
            <Title>8</Title>
            <ButtonText>Cupons</ButtonText>
          </Buttons>
          <Buttons>
            <Title>0</Title>
            <ButtonText>Pontos</ButtonText>
          </Buttons>
          <Buttons onPress={() => handleNavigation("Meus Cartões")}>
            <Ionicons name="wallet-outline" size={22} color="black" />
            <ButtonText>Carteira</ButtonText>
          </Buttons>
          <Buttons onPress={() => handleNavigation("Cartão de presente")}>
            <Ionicons name="gift-outline" size={22} color="black" />
            <ButtonText>Cartão de{"\n"}presente</ButtonText>
          </Buttons>
        </ButtonBox>
      </Content>
      <Content>
        <Title>Meus Pedidos</Title>
        <ButtonBox>
          <Buttons onPress={() => handleNavigation("Meus Pedidos")}>
            <Feather name="credit-card" size={22} color="black" />
            <ButtonText>Não pago</ButtonText>
          </Buttons>
          <Buttons>
            <Feather name="credit-card" size={22} color="black" />
            <ButtonText>Processando</ButtonText>
          </Buttons>
          <Buttons>
            <MaterialCommunityIcons
              name="mailbox-open-up-outline"
              size={22}
              color="black"
            />
            <ButtonText>Enviado</ButtonText>
          </Buttons>
          <Buttons>
            <Ionicons
              name="md-chatbox-ellipses-outline"
              size={22}
              color="black"
            />
            <ButtonText>Comentar</ButtonText>
          </Buttons>
          <Buttons>
            <Octicons name="package-dependencies" size={22} color="black" />
            <ButtonText>Devolução</ButtonText>
          </Buttons>
        </ButtonBox>
      </Content>
      <Content>
        <Title>Mais serviços</Title>
        <ButtonBox>
          <Buttons>
            <MaterialIcons name="support-agent" size={22} color="black" />
            <ButtonText>Suporte</ButtonText>
          </Buttons>
          <Buttons>
            <FontAwesome name="pencil-square-o" size={22} color="black" />
            <ButtonText>Sugestões e{"\n"}reclamações</ButtonText>
          </Buttons>
        </ButtonBox>
      </Content>
    </Container>
  );
}
