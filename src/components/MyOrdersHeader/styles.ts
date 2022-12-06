import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface Props {
  active: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.light_background};
`;
export const CategoryButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const CategoryLabel = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(12)}px;

  text-transform: uppercase;
  color: ${({ theme, active }) =>
    active ? theme.COLORS.light_contrast : theme.COLORS.medium_contrast};
    
  margin: 0 4px;

  border-bottom-width: ${({ active }) => (active ? 2 : 0)}px;

  border-bottom-color: black;
`;
