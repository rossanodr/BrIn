import React from "react";

import { Button } from "../../../components/Button";
import { Container, Content } from "./styles";
import { Input } from "../../../components/Input";

export function MyGiftCards() {
  return (
    <Container>
      <Content>
        <Input label="Número de cartão" />
        <Button title="VERIFIQUE O SALDO" type="black" />
      </Content> 
    </Container>
  );
}
