import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 55px;

  background-color: ${({ theme }) => theme.COLORS.light_background};
  border-bottom-width: 0.2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.light_shade};
`;

export const Content = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 5px;
`;
export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
`;

export const DescriptionContent = styled.View`
  flex-direction: row;
`;

export const ButtonDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_LIGHT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
`;
