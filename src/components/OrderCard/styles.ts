import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  
  background-color: ${({ theme }) => theme.COLORS.light_background};
  
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
`;
export const Content = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 5px 10px;
 

  height: 40px;
`;
export const StylistName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
`;

export const OrderStatus = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.danger_tint};
`;
