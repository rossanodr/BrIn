import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  `;
export const Content = styled.View`
  height: 300px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_shade};
  margin: 10px;
`;

export const ButtonContainer = styled.View`
  width:90% ;
  align-self:center ;
`;
