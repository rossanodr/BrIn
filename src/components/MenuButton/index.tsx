import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  ButtonDescription,
  ButtonTitle,
  Container,
  Content,
  DescriptionContent,
} from "./styles";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  title: string;
  description?: string;
}

export function MenuButton({ title, description, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container>
      <Content {...rest}>
        <ButtonTitle>{title}</ButtonTitle>
        <DescriptionContent>
          <ButtonDescription>{description}</ButtonDescription>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={22}
            color={theme.COLORS.light_contrast}
          />
        </DescriptionContent>
      </Content>
    </Container>
  );
}
