import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.light_background};
  margin: 10px 0;
  padding: 0 10px;
`;

export const ButtonContainer = styled.View`
  width:100% ;
`;
export const TextContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.light_background};
  padding: 10px 0;

  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.COLORS.light_shade};
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.medium_contrast};
`;
