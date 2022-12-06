import React, { useState } from "react";
import {
  Keyboard,
  TextInputProps,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-paper";

import { Container, InputText } from "./styles";

interface Props {
  label: string;
}

export function PasswordInput({ label }: Props) {
  const [text, setText] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <InputText
          label={label}
          secureTextEntry={hidePassword}
          right={
            <TextInput.Icon
              icon={hidePassword ? "eye" : "eye-off"}
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
