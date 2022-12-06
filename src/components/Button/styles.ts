import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface Props {
  type: "black" | "white" | "red";
  size?: number;
  fontSize?: number;
}

export const Container = styled.View<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;

  min-height: ${({ size }) => size}px;
  max-height: ${({ size }) => size + 5}px;
  margin: 10px;

  background-color: ${({ theme, type }) =>
    (type === "black" && theme.COLORS.light_contrast) ||
    (type === "white" && theme.COLORS.light_background) ||
    (type === "red" && theme.COLORS.danger)};
`;
export const Content = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${({ fontSize }) => RFValue(fontSize)}px;
  color: ${({ theme, type }) =>
    type === "white" ? theme.COLORS.danger : theme.COLORS.light_tint};
  margin: 0 10px;
`;
