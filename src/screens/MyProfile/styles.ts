import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.light_background};

  padding: 10px;
  margin: 5px 0;
`;

export const ButtonBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Buttons = styled(RectButton)`
  align-items: center;
  justify-content: center;
  min-height: 90px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_LIGHT};
  font-size: ${RFValue(10)}px;
  text-align: center;
  max-inline-size: 15px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  margin: 5px;
`;
