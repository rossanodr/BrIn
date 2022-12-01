import React from "react";
import { Button } from "../../components/Button";
import { Entypo } from "@expo/vector-icons";
import { ButtonContainer, Container, Content, Title } from "./styles";
import { useTheme } from "styled-components";



export function MyAddress() {
  const theme = useTheme();


  return (
    <Container>
      <Content>
        <Entypo name="location" size={32} color={theme.COLORS.light_shade} />
        <Title>Você ainda não adicionou endereços :-(</Title>
      </Content>
      <ButtonContainer>
        <Button title="+ Adicione um endereço de envio" type="black" onPress={()=> {}}/>
      </ButtonContainer>
    </Container>
  );
}
