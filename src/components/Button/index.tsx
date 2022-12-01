import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Content, Title } from "./styles";

interface Props extends RectButtonProps {
  type: "black" | "white" | "red";
  title: string;
}
export function Button({ type, title, ...rest }: Props) {
  return (
    <Container type={type}>
      <Content {...rest}>
        <Title type={type}>{title}</Title>
      </Content>
    </Container>
  );
}
