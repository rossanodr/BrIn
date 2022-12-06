import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Button } from "../../../../../components/Button";
import {
  Card,
  Container,
  Content,
  Header,
  SubTitle,
  Text,
  TextContainer,
  Title,
} from "./styles";

export function DeleteMyAccount() {
    const theme = useTheme();
  return (
    <Container>
      <Content>
        <Header>

        <Title>Aplicar para excluir conta</Title>
        <SubTitle>
          Antes de solicitar a exclusão da conta, a BrIn realizará as seguintes
          verificações para garantir a segurança da sua conta e da propriedade.
        </SubTitle>
        <SubTitle>
          NOTA: A CONTA NÃO PODE SER RECUPERADA UMA VEZ QUE FOR EXCLUÍDA!
        </SubTitle>
        </Header>

        <Card>
          <TextContainer>
            <SubTitle>A conta está em uma condição segura</SubTitle>
            <Text>Sua conta não corre risco de ser invadida</Text>
          </TextContainer>
          <Ionicons name="shield-checkmark-outline" size={24} color={theme.COLORS.medium_contrast} />
        </Card>
        <Card>
          <TextContainer>
            <SubTitle>Pedido da conta concluído</SubTitle>
            <Text>Não há pedidos incompletos ou pós-venda na conta.</Text>
          </TextContainer>
          <Ionicons name="ios-checkbox-outline" size={24} color={theme.COLORS.medium_contrast} />
        </Card>
        <Card>
          <TextContainer>
            <SubTitle>Ativas da Carteira</SubTitle>
            <Text>Não há dinheiro sacado na carteira</Text>
          </TextContainer>
          <Ionicons name="md-wallet-outline" size={24} color={theme.COLORS.medium_contrast} />
        </Card>
        <Button title="APLICAR PARA EXCLUIR CONTA"  type="black"/>
      </Content>
    </Container>
  );
}
