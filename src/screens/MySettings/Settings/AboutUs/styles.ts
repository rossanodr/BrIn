import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.light_background};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
  padding: 10px 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.danger_tint};
`;
export const Content = styled.View`
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.COLORS.light_tint};

  padding: 15px 15px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_LIGHT};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  text-align: justify;
`;
