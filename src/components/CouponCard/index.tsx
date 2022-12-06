import React from "react";

import {
  Container,
  Content,
  Description,
  DescriptionContainer,
  ExpirationDate,
  ExpirationDateContainer,
  Header,
  Text,
  TicketCircleLeft,
  TicketCircleRight,
  Title,
} from "./styles";

export function CouponCard() {
  return (
    <Container>
      <Header>
        <DescriptionContainer>
          <Title>-R$10,00</Title>
          <Description>Para pedidos acima de R$100,00</Description>
        </DescriptionContainer>
        <ExpirationDateContainer>
          <ExpirationDate>Expira em breve</ExpirationDate>
        </ExpirationDateContainer>
      </Header>
      <TicketCircleRight />
      <TicketCircleLeft />

      <Content>
        <Text>29/11/2022 00:00 ~ 06/12/2022 12:59</Text>
        <Text>Se aplica somente aos itens selecionados</Text>
      </Content>
    </Container>
  );
}
