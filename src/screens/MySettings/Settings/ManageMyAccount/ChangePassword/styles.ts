import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.light_background};
`;

export const Text = styled(TextInput).attrs(({ theme }) => ({
  activeUnderlineColor: theme.COLORS.medium_contrast,
  underlineColor: theme.COLORS.medium_contrast,
}))`
  background-color: ${({ theme }) => theme.COLORS.light_background};
  margin: 10px;
`;

export const ButtonContainer = styled.View`
  width: 90%;
  align-self: center;
`;
