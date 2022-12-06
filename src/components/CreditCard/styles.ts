import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.light_background};

  margin: 10px;
`;

export const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 200px;
`;
export const Title = styled.Text`
  z-index: 1;
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  padding: 25px 25px;
`;

export const DeleteButton = styled(RectButton)`
  position: absolute;
  right: 25px;
  bottom: 10px;
`;
