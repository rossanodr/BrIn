import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
  active: boolean;
}

export const Container = styled.View<Props>`
  flex: 1;
  padding-left: 10px;
  background-color: ${({ theme, active }) =>
    active ? theme.COLORS.light_contrast : theme.COLORS.light_tint};
`;

export const Button = styled(RectButton)<Props>`
  flex: 1;

  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 55px;

  background-color: ${({ theme, active }) =>
    active ? theme.COLORS.light_contrast : theme.COLORS.light_tint};
`;

export const ButtonText = styled.Text<Props>`
  font-family: ${({ theme, active }) =>
    active ? theme.FONTS.TEXT_BOLD : theme.FONTS.TEXT};
  font-size: ${RFValue(10)}px;

  color: ${({ theme, active }) =>
    active ? theme.COLORS.light_background : theme.COLORS.light_contrast};
  text-align: left;
  text-transform: uppercase;
`;
