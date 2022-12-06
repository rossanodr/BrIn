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
export function Input({ label }: Props) {
  const [text, setText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <InputText label={label} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
