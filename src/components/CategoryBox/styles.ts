import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.light_background};
  
`;

export const TitleContainer = styled.View`
  width: 100%;
  `;
export const CategoryTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  text-transform: uppercase;
  margin: 0 10px ;
`;

export const Content = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 0 10px;
`;
