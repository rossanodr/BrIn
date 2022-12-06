import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.danger_gradient,
}))`
  flex: 1;
  margin: 10px;
  background-color: ${({ theme }) => theme.COLORS.danger_rgb};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.danger_tint};
  border-top-width: 5px;
  border-top-color: ${({ theme }) => theme.COLORS.danger_tint};
  height: 150px;
  max-height: 150px;
`;

export const Header = styled.View`
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  justify-content: space-between;

  border-bottom-color: ${({ theme }) => theme.COLORS.light_tint};
  border-bottom-width: 2px;
  border-style: dashed;
`;
export const TicketCircleRight = styled.View`
  z-index: 1;
  position: absolute;

  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  top: 62px;
  background-color: ${({ theme }) => theme.COLORS.light_tint};
`;
export const TicketCircleLeft = styled.View`
  z-index: 1;
  position: absolute;

  left: -10px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  top: 62px;
  background-color: ${({ theme }) => theme.COLORS.light_tint};
`;

export const DescriptionContainer = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.danger_tint};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.danger_tint};
`;
export const ExpirationDateContainer = styled.View``;
export const ExpirationDate = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(9)}px;
  color: ${({ theme }) => theme.COLORS.danger_shade};
`;
export const Content = styled.View`
  flex: 0.5;

  padding: 10px 10px;

  justify-content: center;
  align-items: flex-start;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_LIGHT};
  font-size: ${RFValue(9)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  text-align: justify;
`;
