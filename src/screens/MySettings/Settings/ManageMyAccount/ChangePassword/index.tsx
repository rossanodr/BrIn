import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Button } from "../../../../../components/Button";
import { PasswordInput } from "../../../../../components/PasswordInput";
import { ButtonContainer, Container } from "./styles";

export function ChangePassword() {
  const [text, setText] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <PasswordInput label="Senha antiga" />
        <PasswordInput label="Nova senha" />
        <PasswordInput label="Confirme a senha" />
        <ButtonContainer>

        <Button title="Enviar" type="black" />
        </ButtonContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}



