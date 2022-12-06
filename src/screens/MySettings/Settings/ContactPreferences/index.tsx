import React from "react";
import { PreferencesMenuButton } from "../../../../components/PreferencesMenuButton";

import { ButtonContainer, Container, Content, Label, TextContainer, Title } from "./styles";

export function ContactPreferences() {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>Canais de contato</Title>
          <Label>
            "Depois de ativar o botão, o que significa que você se inscreveu,
            nunca mais perderá as últimas ofertas exclusivas, novos descontos,
            notificações de status de pedidos e lembretes importantes sobre
            pontos / cupons vencidos. Ao mesmo tempo, você concorda em receber
            notícias de ou em nome da BrIn, ou marcas BrIn, nossa família de
            empresas, ou um de seus associados terceirizados, para qualquer
            endereço de e-mail ou número de telefone que você fornecer. Se você
            não quiser saber de novas ofertas incríveis, simplesmente faça login
            em sua conta, clique em "preferências de contato " e desative o
            botão. Você também pode clicar no link " cancelar " diretamente em
            nossos e-mails.
          </Label>
        </TextContainer>
        <ButtonContainer>

        <PreferencesMenuButton buttonActivated={false}
          title="Email"
          description="Receba newsletters e dicas de estilo exclusivas do BrIn via e-mail"
          />
          </ButtonContainer>
        <PreferencesMenuButton buttonActivated={true}
          title="WhatsApp"
          description="Receba newsletters e dicas de estilo exclusivas do BrIn via WhatsApp!"
        />
      </Content>
    </Container>
  );
}
