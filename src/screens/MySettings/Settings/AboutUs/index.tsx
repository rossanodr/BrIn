import React from "react";

import { Container, Content, Header, Text, Title } from "./styles";

export function AboutUs() {
  return (
    <Container>
        <Header>
          <Title>SOBRE NÓS</Title>
        </Header>
      <Content>
        <Text>Acreditamos que a beleza da moda deve ser acessível a todos, não
          apenas a poucos privilegiados. Quando a empresa foi fundada em 2012,
          percebemos que as empresas de moda tinham que escolher entre oferecer
          escolha ou reduzir a pressão de estoque e o desperdício. para mudar
          isso, liderando o desenvolvimento de processos e tecnologias
          alternativas para trazer a moda para o futuro.
        </Text>
      </Content>
    </Container>
  );
}
