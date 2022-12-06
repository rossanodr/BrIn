import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButtonProps, Switch } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Button } from "../Button";
import {
  ButtonContainer,
  ButtonDescription,
  ButtonTitle,
  Container,
  Content,
  TextContainer,
} from "./styles";

interface Props extends RectButtonProps {
  title: string;
  description?: string;
  buttonActivated: boolean;
}

export function PreferencesMenuButton({
  title,
  description,
  buttonActivated,
  ...rest
}: Props) {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };
  const theme = useTheme();
  return (
    <Container>
      <Content {...rest}>
        <TextContainer>
          <ButtonTitle>{title}</ButtonTitle>
          <ButtonDescription>{description}</ButtonDescription>
        </TextContainer>
        <ButtonContainer>
          {buttonActivated ? (
            <Button title="Vincular" type="black" size={25} fontSize={9} />
          ) : (
            <Switch
              thumbColor={checked ? theme.COLORS.primary_tint : "white"}
              trackColor={{ false: "black", true: "gray" }}
              value={checked}
              onValueChange={(value) => setChecked(value)}
            />
          )}
        </ButtonContainer>
      </Content>
    </Container>
  );
}
