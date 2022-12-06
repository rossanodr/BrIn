import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Content, Title } from "./styles";

interface Props extends RectButtonProps {
  type: "black" | "white" | "red";
  title: string;
  size?: number;
  fontSize?: number;

}
export function Button({ type, title, size = 45, fontSize=12, ...rest }: Props) {
  return (
    <Container type={type} size={size}>
      <Content {...rest}>
        <Title type={type} fontSize={fontSize}>{title}</Title>
      </Content>
    </Container>
  );
}
