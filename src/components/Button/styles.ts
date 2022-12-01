import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
  type: "black" | "white" | "red";
}

export const Container = styled.View<Props>`
  min-height: 45px;
  max-height: 50px;
  width: 100%;
  background-color: ${({ theme, type }) =>
    (type === "black" && theme.COLORS.light_contrast) ||
    (type === "white" && theme.COLORS.light_background) ||
    (type === "red" && theme.COLORS.danger)};
`;
export const Content = styled(RectButton)`
  flex: 1;
  justify-content:center ;
  align-items:center ;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === "white" ? theme.COLORS.danger : theme.COLORS.light_tint};
`;
