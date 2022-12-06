import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '../../../../../components/Button';

import {
  ButtonContainer,
  Container, Content, EmailContainer, SubTitle, Title
} from './styles';

export function EmailVerification() {
  return (
    <Container>
    <Content>
    <MaterialCommunityIcons name="email-open-multiple-outline" size={55} color="black" />
      <Title>Verificação do Email</Title>
      <SubTitle>100 pontos serão adicionados em sua conta.</SubTitle>
        <EmailContainer>
      <SubTitle>rv*****@gmail.com</SubTitle>

        </EmailContainer>
    <ButtonContainer>
      <Button title="Verificar" type="black" onPress={()=> {}}/>
    </ButtonContainer>
    </Content>
  </Container>
  );
}