import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.light_background};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 25px;
`;
export const Header = styled.View`
`;

export const Card = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.light_tint};
  margin: 5px 0;
  padding: 0 10px;
`;

export const TextContainer = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  
`;
export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_LIGHT};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  margin: 5px 0;
`;
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(9)}px;
  color: ${({ theme }) => theme.COLORS.medium_contrast};
`;
